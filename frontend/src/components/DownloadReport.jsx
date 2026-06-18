import React from "react"

function DownloadReport({ result }) {

  if (!result) return null

  const reportText = result?.report

  const downloadReport = () => {

    const blob = new Blob([reportText], { type: "text/plain;charset=utf-8" })

    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")

    link.href = url

    link.download = "CogniX_EEG_Report.txt"

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)

    URL.revokeObjectURL(url)

  }

  return (

    <div className="download-section">

      <h2>Download Report</h2>

      <p className="confidence">
        Export the EEG cognitive monitoring analysis as a text report.
      </p>

      <button onClick={downloadReport}>
        Download EEG Report (.txt)
      </button>

    </div>

  )

}

export default DownloadReport