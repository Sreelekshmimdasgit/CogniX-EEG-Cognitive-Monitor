import React from "react"

function StressAnalysis({ result }) {

  if (!result) return null

  const stress = result?.stress_signal

  if (!stress) return null

  const stressPercent = (stress.stress_index * 100).toFixed(1)

  return (

    <div className="stress-section">

      <h2>Stress Analysis</h2>

      <div className="grid">

        {/* Stress Level */}

        <div className="card">

          <h3>Stress Level</h3>

          <p className="value">
            {stress.level}
          </p>

          <p className="confidence">
            Derived from EEG Alpha/Beta Ratio
          </p>

        </div>


        {/* Stress Index */}

        <div className="card">

          <h3>Stress Index</h3>

          <p className="value">
            {stress.stress_index.toFixed(3)}
          </p>

          <p className="confidence">
            Cognitive Stress Indicator
          </p>

        </div>


        {/* Signal Variability */}

        <div className="card">

          <h3>Signal Variability</h3>

          <p className="value">
            {stress.variability.toFixed(3)}
          </p>

          <p className="confidence">
            EEG Channel Variability
          </p>

        </div>


        {/* Confidence */}

        <div className="card">

          <h3>Confidence</h3>

          <p className="value">
            {(stress.confidence * 100).toFixed(2)}%
          </p>

          <p className="confidence">
            Stress Estimation Reliability
          </p>

        </div>

      </div>


      {/* Visual Stress Meter */}

      <div className="card large">

        <h3>Stress Meter</h3>

        <div
          style={{
            width: "100%",
            height: "20px",
            background: "#111",
            borderRadius: "10px",
            overflow: "hidden",
            marginTop: "10px"
          }}
        >

          <div
            style={{
              width: `${stressPercent}%`,
              height: "100%",
              background: stress.stress_index < 0.4
                ? "#00ff9d"
                : stress.stress_index < 0.7
                ? "#ffaa00"
                : "#ff3b3b",
              transition: "0.5s"
            }}
          />

        </div>

        <p className="confidence" style={{marginTop:"8px"}}>

          Current Stress Load: {stressPercent}%

        </p>

      </div>

    </div>

  )

}

export default StressAnalysis