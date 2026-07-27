"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Buttons = ({ buttonsCollection }: Data) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    setOpenDropdown((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="grid grid-cols-3 gap-6 md:gap-6 w-max">
      {buttonsCollection && buttonsCollection.map((item, idx) => {
        const hasMultipleLinks = item.links && item.links.length > 0;

        return (
          <div key={idx} className="relative flex flex-col items-center justify-center">
            {hasMultipleLinks ? (
              <button
                onClick={(e) => toggleDropdown(e, idx)}
                className="flex flex-col outline-none cursor-pointer group items-center justify-center text-center gap-[10px]"
              >
                <div className="h-[60px] w-[60px] border-2 border-[#2E2F34]  duration-300 flex items-center justify-center rounded-[12px]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="aspect-sqwuare sm:max-h-[28px] max-h-6 min-h-6 object-contain duration-300 "
                  />
                </div>
                <p className=" text-xs  sm:text-sm max-w-[80px] leading-[110%] tracking-[-1%]">
                  {item.title}
                </p>
              </button>
            ) : (
              <Link
                href={item.link ? item.link : ""}
                shallow
                target="_blank"
                className="flex flex-col outline-none cursor-pointer group items-center justify-center text-center gap-[10px]"
              >
                <div className="h-[60px] w-[60px] border-2 border-[#2E2F34]  duration-300 flex items-center justify-center rounded-[12px]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="aspect-square sm:max-h-[25px] max-h-6 min-h-6 object-contain duration-300 "
                  />
                </div>
                <p className=" text-xs  sm:text-sm max-w-[80px] leading-[110%] tracking-[-1%]">
                  {item.title}
                </p>
              </Link>
            )}

            {/* Modal for multi links */}
            {hasMultipleLinks && openDropdown === idx && (
              <div className="fixed inset-0 bg-[#776956]/50 z-[100] flex items-center justify-center p-4">
                <div className="bg-[#776956] text-[#2E2F34] border-2 border-[#2E2F34] rounded-xl shadow-2xl z-50 flex flex-col w-full max-w-sm overflow-hidden relative">
                  <div className="p-4 border-b border-[#2E2F34]/30 flex justify-between items-center bg-[#776956]/50">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(null);
                      }}
                      className="text-[#2E2F34] hover:opacity-70 p-1"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex flex-col p-2">
                    {item.links!.map((linkObj, linkIdx) => (
                      <Link
                        key={linkIdx}
                        href={linkObj.url || ""}
                        target="_blank"
                        className="px-4 py-3 hover:bg-[#2E2F34]/10 text-base font-medium transition-colors rounded-lg mb-1 last:mb-0"
                      >
                        {linkObj.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Buttons;
