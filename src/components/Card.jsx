import React from "react";
import { FaFile as FileIcon } from "react-icons/fa";
import { MdOutlineFileDownload as DownloadIcon } from "react-icons/md";
import { MdFileDownloadDone as DownloadCompIcon } from "react-icons/md";
import { motion } from "framer-motion";

function Card({ data, containerRef }) {
  //   console.log(data);
  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      whileDrag={{ scale: 1.2 }}
      className="relative flex-shrink-0 w-40 h-60 px-5 py-10 rounded-[30px] bg-zinc-900 text-white overflow-hidden"
    >
      <FileIcon />
      <p className="text-sm mt-5 font-semibold">{data.desc}</p>
      <div
        className={`footer absolute bottom-0 w-full h-10  ${
          data.isDownloaded ? "mb-[10px]" : "mb-[30px]"
        } left-0 `}
      >
        <div className="flex justify-between items-center px-5 mb-[10px]  ">
          <h5>{data.fileSize}</h5>
          <span className="w-4 h-4 sm:w-7 sm:h-7 bg-sky-300 rounded-full flex justify-center items-center">
            {data.isDownloaded ? (
              <DownloadCompIcon size=".7em" color="#000" />
            ) : (
              <DownloadIcon size=".7em" color="#000" />
            )}
          </span>
        </div>
        {!data.isDownloaded && (
          <div className="tag w-full h-full bg-green-400 flex justify-center items-center">
            <h3 className="-translate-y-1 text-sm font-semibold ">
              Download Now
            </h3>
          </div>
        )}
        ;
      </div>
    </motion.div>
  );
}

export default Card;
