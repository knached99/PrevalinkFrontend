// src/api/auth.js
import axios from './api'; // Import the configured axios instance

export const getAuthUser = async () => {
  try {
    const response = await axios.get('/api/user'); // Adjust the endpoint as needed
    return response.data;
  } catch (error) {
    throw error;
  }
};
