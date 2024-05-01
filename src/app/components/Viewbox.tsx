"use client";

import { useState, useEffect } from "react";
import Video from "./Video";
import axios from "axios";

const Viewbox = () => {
  const [videos, setVideos] = useState<Array<string>>([]);

  const key = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=3&api_key=${key}`
    );
    const urls = response.data.map((pic) => pic.url);
    setVideos([...videos, ...urls]);
  };

  return (
    <div className="w-full flex flex-col justify-start items-center py-5 gap-5">
      {videos.map((video) => {
        return <Video />;
      })}
    </div>
  );
};

export default Viewbox;
