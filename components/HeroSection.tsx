"use client";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";

const HeroSection = ({ name, image, position }: Data) => {
  return (
    <div className=" flex flex-col items-center select-none w-max">
      <div
        className={`flex items-center justify-center text-center ${image ? "rounded-[23px] aspect-square h-[110px] w-[110px]" : ""
          }`}
      >
        <Image
          src={image ? image : logo}
          alt=""
          width={252}
          height={217.39}
          placeholder="empty"
          priority
          className={`${image
            ? "rounded-[23px] object-cover"
            : "object-contain mx-auto max-h-[217.39px]"
            }`}
        />
      </div>
      {image && (
        <Image
          src={logo}
          alt=""
          height={160}
          width={600}
          className="h-[45px] w-auto mt-4"
        />
      )}

      {name && <h1 className="mt-3 text-xl font-bold">{name}</h1>}
      {position && <p className="text-sm font-bold ">{position}</p>}
    </div>
  );
};

export default HeroSection;
