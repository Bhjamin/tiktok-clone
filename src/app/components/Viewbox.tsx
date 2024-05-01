"use client";

import { useState, useEffect } from "react";
import Video from "./Video";

const Viewbox = () => {
  const [videos, setVideos] = useState([]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Video />
    </div>
  );
};

export default Viewbox;
