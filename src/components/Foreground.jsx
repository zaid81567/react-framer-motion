import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const containerRef = useRef(null); // Creating a ref for the container div

  const data = [
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".8mb",
      isDownloaded: true,
      tag: { tagTitle: "Download Now", color: "green" },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".8mb",
      isDownloaded: true,
      tag: { tagTitle: "Download Now", color: "green" },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".8mb",
      isDownloaded: false,
      tag: { tagTitle: "Download Now", color: "green" },
    },
  ];

  return (
    <div
      ref={containerRef} // Attaching the ref to the container div
      className="fixed z-[20] w-full h-screen p-5 flex gap-10 flex-wrap"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} containerRef={containerRef} /> // Passing the ref as a prop
      ))}
    </div>
  );
}

export default Foreground;
