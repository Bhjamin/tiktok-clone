"use client";

import { useState, useEffect } from "react";
import Video from "./Video";
import axios from "axios";

const Viewbox = () => {
  const [videos, setVideos] = useState([]);

  const key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    console.log(key);
  }, [key]);

  console.log(key);

  // const fetchData = async () => {
  //   await axios.get(`https://api.thecatapi.com/v1/images/search&api_key=${}`)
  // }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Video />
    </div>
  );
};

export default Viewbox;
