import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
    query
  )}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};

// const API = {
//     fetchMovies: async (query) => {
//         const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             const data = await response.json();
//             return data.results;
//         } catch (error) {
//             console.error("Error fetching movies:", error);
//             return [];
//         }
//     }
// };
