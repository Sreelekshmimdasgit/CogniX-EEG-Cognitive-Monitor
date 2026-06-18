import React, { useState } from "react"

import Header from "./components/Header"
import UploadPanel from "./components/UploadPanel"
import ModelOutput from "./components/ModelOutput"
import StressAnalysis from "./components/StressAnalysis"
import EEGVisualization from "./components/EEGVisualization"
import DownloadReport from "./components/DownloadReport"

import "./styles.css"

function App() {

  const [result, setResult] = useState(null)

  return (

    <div className="container">

      {/* HEADER */}
      <Header />

      {/* FILE UPLOAD */}
      <UploadPanel setResult={setResult} />

      {/* RESULTS DISPLAY */}
      {result && (

        <>

          {/* MODEL OUTPUT */}
          <ModelOutput result={result} />

          {/* STRESS ANALYSIS */}
          <StressAnalysis result={result} />

          {/* EEG VISUALIZATION */}
          <EEGVisualization preview={result.preview} />

          {/* REPORT DOWNLOAD */}
          <DownloadReport result={result} />

        </>

      )}

    </div>

  )

}

export default App