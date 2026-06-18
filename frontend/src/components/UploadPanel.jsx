import React, { useState } from "react"
import { analyzeEEG } from "../services/api"

function UploadPanel({ setResult }) {

  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleFileChange = (event) => {

    const selectedFile = event.target.files[0]

    if (!selectedFile) return

    setFile(selectedFile)
    setFileName(selectedFile.name)
  }

  const handleUpload = async () => {

    if (!file) {
      alert("Please select an EEG file first")
      return
    }

    try {

      setLoading(true)

      const result = await analyzeEEG(file)

      setResult(result)

    } catch (error) {

      console.error("Prediction failed:", error)

      alert("Prediction failed. Check backend server.")

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className="upload-panel">

      <h2>Upload EEG File</h2>

      <p className="upload-description">
        Supported formats: EDF, NPY, CSV
      </p>

      <div className="upload-controls">

        <input
          type="file"
          accept=".edf,.npy,.csv"
          onChange={handleFileChange}
        />

        <button onClick={handleUpload} disabled={loading}>

          {loading ? "Analyzing..." : "Start Analysis"}

        </button>

      </div>

      {fileName && (

        <p className="selected-file">

          Selected File: {fileName}

        </p>

      )}

    </div>

  )

}

export default UploadPanel