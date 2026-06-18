from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import torch
import os
import tempfile
import mne

from model import MultiTaskEEGTransformer
from inference import LiveEEGEngine

# -------------------------------------------------
# Initialize FastAPI
# -------------------------------------------------
app = FastAPI()

# Allow React frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------------------------
# Device
# -------------------------------------------------
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# -------------------------------------------------
# Load Model Once (Startup)
# -------------------------------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
import os
MODEL_PATH = os.path.join("models", "best_multitask_eeg.pth")

model = MultiTaskEEGTransformer(
    n_channels=32,
    num_task_classes=6
)

model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
engine = LiveEEGEngine(model, device)

print("✅ Model loaded successfully")


# -------------------------------------------------
# EEG Loader
# -------------------------------------------------
def load_eeg_file(file_path, target_channels=32, target_samples=256):
    if file_path.endswith(".npy"):
        eeg = np.load(file_path)

    elif file_path.endswith(".csv"):
        eeg = np.loadtxt(file_path, delimiter=",")

    elif file_path.endswith(".edf"):
        raw = mne.io.read_raw_edf(file_path, preload=True, verbose=False)
        raw.pick("eeg")
        eeg = raw.get_data()

    else:
        raise ValueError("Unsupported file format")

    if eeg.ndim != 2:
        raise ValueError(f"EEG must be 2D (channels, time). Got {eeg.shape}")

    ch, t = eeg.shape

    # Channel alignment
    if ch < target_channels:
        eeg = np.vstack([eeg, np.zeros((target_channels - ch, t))])
    elif ch > target_channels:
        eeg = eeg[:target_channels, :]

    # Time alignment
    if t < target_samples:
        eeg = np.hstack([eeg, np.zeros((target_channels, target_samples - t))])
    elif t > target_samples:
        eeg = eeg[:, :target_samples]

    return eeg


# -------------------------------------------------
# Health Check
# -------------------------------------------------
@app.get("/")
def health_check():
    return {"status": "EEG Cognitive State Monitor API Running"}


# -------------------------------------------------
# EEG Analysis Endpoint
# -------------------------------------------------
@app.post("/analyze")
async def analyze_eeg(file: UploadFile = File(...)):

    try:
        # Save uploaded file temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix=file.filename) as tmp:
            contents = await file.read()
            tmp.write(contents)
            tmp_path = tmp.name

        eeg = load_eeg_file(tmp_path)
        os.remove(tmp_path)

        # Run inference
        output = engine.predict(eeg)

        return {
            "success": True,
            "data": {
                **output,
                "preview": eeg[:3].tolist()   # 👈 ADD THIS
            }
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }