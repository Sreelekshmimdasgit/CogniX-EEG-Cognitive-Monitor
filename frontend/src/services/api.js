import axios from "axios"

/*
  Backend API configuration
*/

const API = axios.create({
  baseURL: "http://localhost:8000"
})

/*
  Upload EEG file and get predictions
*/

export const analyzeEEG = async (file) => {

  const formData = new FormData()
  formData.append("file", file)

  try {

    const response = await API.post("/analyze", formData)

    // If backend sends error
    if (!response.data.success) {
      throw new Error(response.data.error || "Backend error")
    }

    return response.data.data

  } catch (error) {

    console.error("API Error:", error)

    if (error.response) {
      console.error("Server response:", error.response.data)
    }

    throw error
  }
}