import { FaGithub, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTailwind,
} from "react-icons/tb";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center text-white bg-black items-center">
      <h1 className="mb-8 text-2xl">Precisão adaptativa</h1>
      <div className="w-[36rem] h-[32rem] flex flex-col bg-[rgb(20,22,22)]">
        <div className="w-[100%] h-[33.33%] flex">
          <div className=" w-[100%] flex justify-center items-center">
            <div className="p-4 rounded-full hover:bg-slate-500">
              <FaReact size={32} color="cyan" />
            </div>
          </div>
          <div className=" w-[100%] flex justify-center items-center">
            <TbBrandTailwind size={32} color="cyan" />
          </div>
        </div>
        <div className="w-[100%] h-[33.33%] flex">
          <div className=" w-[100%] flex justify-center items-center">
            <FaGithub size={32} color="cyan" />
          </div>
          <div className=" w-[100%] flex justify-center items-center">
            <TbBrandJavascript size={32} color="cyan" />
          </div>
        </div>
        <div className="w-[100%] h-[33.33%] flex">
          <div className=" w-[100%] flex justify-center items-center">
            <TbBrandNextjs size={32} color="cyan" />
          </div>
          <div className=" w-[100%] flex justify-center items-center">
            <SiTypescript size={32} color="cyan" />
          </div>
        </div>
      </div>
    </div>
  );
}
