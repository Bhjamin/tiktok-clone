"use client";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const Video = ({
  video,
  fetchData,
  index,
  length,
}: {
  video: string;
  fetchData?: () => void;
  index: number;
  length: number;
}) => {
  const ref = useRef<HTMLImageElement>(null);
  const isInView = useInView(ref, { margin: "-300px 0px -300px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
    if (index === length - 2 && isInView) {
      // fetchData();
      console.log("fetching data");
    }
  }, [isInView]);

  return (
    <div className="w-full h-full shrink-0 max-w-[425px] min-w-[300px] min-h-[600px] max-h-[825px] bg-neutral-700 flex justify-center items-center rounded-3xl relative">
      <span className="absolute bottom-2 left-2 w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
        {index + 1}
      </span>
      <img ref={ref} src={video} />
    </div>
  );
};

export default Video;
