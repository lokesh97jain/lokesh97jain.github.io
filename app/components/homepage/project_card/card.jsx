// @flow strict
import { timeConverter } from "@/utils/time-converter";
import Image from "next/image";
import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";
import { FaCommentAlt } from "react-icons/fa";
import { project } from "@/utils/data/projectData";
import { MdOutlineOpenInNew } from "react-icons/md";

function Card({ item }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={item.image}
          height={1080}
          width={1920}
          alt=""
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col"> 
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium text-center">
            {item.title}
          </p> 
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 items-center">
          {item.description}
        </p>
        {item.link && (
        <div className="flex justify-center items-center">
          <Link target="_blank" href={item.link}>
            <button className="bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs">
              <MdOutlineOpenInNew />
            </button>
          </Link>
        </div>
        )}
      </div>
    </div>
  );
}

export default Card;
