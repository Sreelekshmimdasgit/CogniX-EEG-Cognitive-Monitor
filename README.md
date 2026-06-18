COGNIX: EEG COGNITIVE MONITORING SYSTEM

Transformer-Based Multi-Task Learning Framework for Cognitive State Analysis


PROJECT OVERVIEW

CogniX is an intelligent EEG Cognitive Monitoring System developed to analyze electroencephalography (EEG) signals and predict multiple cognitive states using a Transformer-based deep learning architecture.

The system performs:

• Emotion Recognition
• Cognitive Task Classification
• Visual Response Detection
• Stress Assessment
• EEG Signal Visualization
• Automated Report Generation

The project integrates EEG signal processing, Transformer-based deep learning, FastAPI backend services, and a React-based dashboard into a unified cognitive monitoring platform.



OBJECTIVES

• Develop a Transformer-based framework for EEG cognitive analysis.

• Perform automated emotion recognition from EEG signals.

• Classify cognitive tasks using neural activity patterns.

• Detect visual stimulus responses.

• Estimate cognitive stress levels.

• Provide EEG signal visualization.

• Generate interpretable cognitive assessment reports.


KEY FEATURES

• Multi-task EEG analysis using a shared Transformer encoder.

• Emotion recognition and cognitive state prediction.

• Cognitive task classification.

• Visual response detection.

• Stress level assessment.

• EEG signal visualization.

• Automated report generation.

• Support for multiple EEG file formats.


SYSTEM ARCHITECTURE

EEG Input Files (EDF / NPY / CSV)

        ↓

EEG Preprocessing

        ↓

Signal Standardization
(32 Channels × 256 Samples)

        ↓

MultiTaskEEGTransformer

        ↓

Shared Feature Representation

        ↓

Emotion Head
Task Head
Vision Head
Stress Head

        ↓

Prediction Engine

        ↓

FastAPI Backend

        ↓

React Dashboard

        ↓

Visualization and Reports



DEEP LEARNING MODEL

Model Name:
MultiTaskEEGTransformer

Core Components:

• Linear Projection Layer

• Positional Encoding

• Multi-Head Self-Attention

• Transformer Encoder Layers

• Shared Feature Learning

• Task-Specific Prediction Heads



PREDICTION TASKS

Emotion Recognition

• Neutral
• Happy
• Sad
• Angry
• Relaxed
• Excited

Cognitive Task Classification

• Resting State
• Reading
• Mathematical Thinking
• Memory Recall
• Visual Attention
• Problem Solving

Visual Response Detection

• Visual Stimulus Detected
• No Visual Stimulus Detected

Stress Assessment

• Low Stress
• Moderate Stress
• High Stress



SUPPORTED EEG FORMATS

• EDF – European Data Format

• NPY – NumPy EEG Arrays

• CSV – Tabular EEG Data



TECHNOLOGY STACK

Frontend

• React.js
• Vite
• JavaScript
• CSS

Backend

• FastAPI
• Python

Deep Learning

• PyTorch
• Transformer Architecture

EEG Processing

• MNE
• NumPy
• Pandas



DASHBOARD MODULES

EEG File Upload

Allows users to upload EEG recordings in EDF, NPY, or CSV format for analysis.

Cognitive Prediction Panel

Displays predicted emotional state, cognitive task, and visual response along with confidence scores.

Stress Analysis Module

Provides stress estimation through stress indices and visual stress indicators.

EEG Visualization

Displays EEG signal activity from selected channels for visual inspection.

Automated Report Generation

Generates a comprehensive cognitive assessment report summarizing the analysis results.



INSTALLATION

Backend Setup

cd backend

pip install -r requirements.txt

uvicorn main:app --reload

Backend URL:

http://localhost:8000

Frontend Setup

cd frontend

npm install

npm run dev

Frontend URL:

http://localhost:5173



WORKFLOW

1. Upload EEG file.

2. Load and preprocess EEG signals.

3. Standardize signal dimensions.

4. Convert EEG signals into model-ready tensors.

5. Perform Transformer-based inference.

6. Generate multi-task predictions.

7. Visualize EEG activity.

8. Generate cognitive assessment report.



FUTURE ENHANCEMENTS

• Real-Time EEG Monitoring

• Explainable AI (XAI)

• Brain–Computer Interface (BCI) Integration



ACADEMIC INFORMATION

Project Title:
CogniX: EEG Cognitive Monitoring System

Degree:
Master of Science in Artificial Intelligence

Institution:
Saintgits College of Applied Sciences

University:
Mahatma Gandhi University



LICENSE

This project has been developed for academic and research purposes.
