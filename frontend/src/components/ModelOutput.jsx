import React from "react"

function ModelOutput({ result }) {

  if (!result) return null

  return (
    <div className="model-output">

      <h2>Model Output</h2>

      <div className="grid">

        {/* Emotion */}

        <div className="card">

          <h3>Emotion</h3>

          <p className="value">
            {result?.emotion?.label}
          </p>

          <p className="confidence">
            Confidence: {(result?.emotion?.confidence * 100).toFixed(2)}%
          </p>

        </div>


        {/* Cognitive Task */}

        <div className="card">

          <h3>Cognitive Task</h3>

          <p className="value">
            {result?.task?.label}
          </p>

          <p className="confidence">
            Confidence: {(result?.task?.confidence * 100).toFixed(2)}%
          </p>

        </div>


        {/* Visual Response */}

        <div className="card">

          <h3>Visual Response</h3>

          <p className="value">
            {result?.vision?.label}
          </p>

          <p className="confidence">
            Confidence: {(result?.vision?.confidence * 100).toFixed(2)}%
          </p>

        </div>


        {/* Latency */}

        <div className="card">

          <h3>Model Latency</h3>

          <p className="value">
            {result?.latency_ms?.toFixed(2)} ms
          </p>

          <p className="confidence">
            Processing Time
          </p>

        </div>

      </div>

    </div>
  )
}

export default ModelOutput