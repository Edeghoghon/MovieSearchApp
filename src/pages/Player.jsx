import axios from "axios";
import React, { use, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Player.css";
const Videos = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2NmODgxMTg2OTQ5ZjMxN2E5NWQwMzkyNTQ5MGI5MiIsIm5iZiI6MTc0OTY0MDY4MC44NjgsInN1YiI6IjY4NDk2NWU4NTExNjEzNzI1MzNmZDI5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uH0JWr2f-FKlCazop_g-hvfGRb6aW1O2TKhBSbDnllo",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );
        setApiData(response.data.results[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="player">
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)} </p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Videos;
