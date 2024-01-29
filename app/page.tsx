"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTailwind,
} from "react-icons/tb";

export default function Home() {
  const [handleHover, setHandleHover] = useState("");

  return (
    <div className="w-full h-screen flex flex-col justify-center text-white bg-black items-center">
      <h1 className="mb-8 text-2xl">Precisão adaptativa</h1>

      <div className="w-[36rem] h-[32rem] flex flex-col hover:cursor-none bg-[rgb(20,22,22)]">
        <div className="w-[100%] h-[33.33%] flex">
          <div
            onMouseEnter={() => setHandleHover("react")}
            onMouseLeave={() => setHandleHover("")}
            className="w-[100%] flex justify-center items-center"
          >
            <div
              className={`${
                handleHover === "react"
                  ? "bg-[#999999] animate-in zoom-in-50 "
                  : null
              } w-14 h-14 flex justify-center items-center rounded-full`}
            >
              <FaReact size={32} color="cyan" />
            </div>
          </div>
          <div
            onMouseEnter={() => setHandleHover("tailwind")}
            onMouseLeave={() => setHandleHover("")}
            className=" w-[100%] flex justify-center items-center"
          >
            <div
              className={`${
                handleHover === "tailwind"
                  ? "bg-[#999999] animate-in zoom-in-50"
                  : null
              } w-14 h-14 flex justify-center items-center rounded-full`}
            >
              <TbBrandTailwind size={32} color="cyan" />
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[33.33%] flex">
          <div
            onMouseEnter={() => setHandleHover("git")}
            onMouseLeave={() => setHandleHover("")}
            className=" w-[100%] flex justify-center items-center"
          >
            <div
              className={`${
                handleHover === "git"
                  ? "bg-[#999999]  animate-in zoom-in-50"
                  : null
              } w-14 h-14 flex justify-center items-center rounded-full`}
            >
              <FaGithub size={32} color="cyan" />
            </div>
          </div>
          <div
            onMouseEnter={() => setHandleHover("js")}
            onMouseLeave={() => setHandleHover("")}
            className=" w-[100%] flex justify-center items-center"
          >
            <div
              className={`${
                handleHover === "js"
                  ? "bg-[#999999]  animate-in zoom-in-50"
                  : null
              } w-14 h-14 flex justify-center items-center rounded-full`}
            >
              <TbBrandJavascript size={32} color="cyan" />
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[33.33%] flex">
          <div
            onMouseEnter={() => setHandleHover("next")}
            onMouseLeave={() => setHandleHover("")}
            className=" w-[100%] flex justify-center items-center"
          >
            <div
              className={`${
                handleHover === "next"
                  ? "bg-[#999999]  animate-in zoom-in-50"
                  : null
              } w-14 h-14 flex justify-center items-center rounded-full`}
            >
              <TbBrandNextjs size={32} color="cyan" />
            </div>
          </div>
          <div
            onMouseEnter={() => setHandleHover("ts")}
            onMouseLeave={() => setHandleHover("")}
            className=" w-[100%] flex justify-center items-center"
          >
            <div
              className={`${
                handleHover === "ts"
                  ? "bg-[#999999]  animate-in zoom-in-50"
                  : null
              } w-14 h-14 flex justify-center items-center rounded-full`}
            >
              <SiTypescript size={32} color="cyan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
