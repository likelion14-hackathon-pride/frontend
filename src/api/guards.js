import axiosInstance from './axiosInstance'

const USE_MOCK = true

// PUT /guards/keywords
export const saveGuardKeywords = async (keywords) => {
  if (USE_MOCK) {
    return new Promise((resolve) => setTimeout(() => resolve({ keywords }), 400))
  }
  const { data } = await axiosInstance.put('/guards/keywords', keywords)
  return data
}