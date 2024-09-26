"use client";

import { useState, useEffect } from "react";
import Video from "./Video";
import axios from "axios";

const Viewbox = () => {
  const [videos, setVideos] = useState<Array<string>>([
    "https://cdn2.thecatapi.com/images/3ic.jpg",
    "https://cdn2.thecatapi.com/images/3v4.jpg",
    "https://cdn2.thecatapi.com/images/4h4.gif",
    "https://cdn2.thecatapi.com/images/bcu.jpg",
    "https://cdn2.thecatapi.com/images/c18.jpg",
    "https://cdn2.thecatapi.com/images/d0g.png",
    "https://cdn2.thecatapi.com/images/dlo.jpg",
    "https://cdn2.thecatapi.com/images/MjA0MDUxMA.jpg",
    "https://cdn2.thecatapi.com/images/MjA2MTgzMw.jpg",
    "https://cdn2.thecatapi.com/images/aU69p2mTT.jpg",
  ]);

  const key = process.env.NEXT_PUBLIC_API_KEY;

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(videos);

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     `https://api.thecatapi.com/v1/images/search?limit=3&api_key=${key}`
  //   );
  //   const urls = response.data.map((pic) => pic.url);
  //   setVideos([...videos, ...urls]);
  // };

  return (
    <div className="w-full flex flex-col justify-start items-center py-5 gap-5">
      {videos.map((video, i) => {
        return (
          <Video
            key={video}
            video={video}
            // fetchData={fetchData}
            index={i}
            length={videos.length}
          />
        );
      })}
    </div>
  );
};

export default Viewbox;
