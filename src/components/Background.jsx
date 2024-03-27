import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[10] w-full h-screen">
        <div className="absolute w-full pt-[40px] flex justify-center text-zinc-600 font-semibold text-2xl">
          Framer Motion Fun Project
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
