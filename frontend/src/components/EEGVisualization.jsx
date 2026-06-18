import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts"

function EEGVisualization({ preview }) {

  if (!preview || preview.length < 3) {
    return (
      <div className="card large">
        <h2>EEG Visualization</h2>
        <p>No EEG data available</p>
      </div>
    )
  }

  // Convert EEG preview to chart format
  const chartData = preview[0].map((value, index) => ({
    time: index,
    ch1: preview[0][index],
    ch2: preview[1][index],
    ch3: preview[2][index]
  }))

  return (

    <div className="card large">

      <h2>EEG Signal Visualization</h2>

      <p>First 3 EEG Channels (256 Samples)</p>

      <ResponsiveContainer width="100%" height={350}>

        <LineChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="time"
            label={{
              value: "Time (Samples)",
              position: "insideBottom",
              offset: -5
            }}
          />

          <YAxis
            label={{
              value: "Amplitude",
              angle: -90,
              position: "insideLeft"
            }}
          />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="ch1"
            name="Channel 1"
            stroke="#00E0FF"
            dot={false}
            strokeWidth={2}
          />

          <Line
            type="monotone"
            dataKey="ch2"
            name="Channel 2"
            stroke="#FF4FD8"
            dot={false}
            strokeWidth={2}
          />

          <Line
            type="monotone"
            dataKey="ch3"
            name="Channel 3"
            stroke="#00FFC8"
            dot={false}
            strokeWidth={2}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  )
}

export default EEGVisualization