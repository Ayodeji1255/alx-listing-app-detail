import React from "react";
import Image from "next/image";
import { ImagesProp } from "@/interfaces";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const Header: React.FC<ImagesProp> = ({ logo, alt }) => {
  const options = [
    { title: "Check In", subtitle: "Add Date" },
    { title: "Check Out", subtitle: "Add Date" },
    { title: "Guests", subtitle: "Add Guests" },
  ];
  const scrollBar = {
    scrollbars: "none",
  };
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className=" w-full">
              <Image src={logo} alt={alt} width={60} height={60} />
            </div>
          </div>

          <div className="flex-1 mx-4 w-[50%]">
            <div className="flex gap-0 m-auto px-1.5 py-3.5 sm:flex w-[70%] items-center border-black/50 border rounded-full h-13 ">
              <div className="rounded-full pl-5 ">
                <span>Location</span>
                <input
                  type="search"
                  placeholder="Search Distination"
                  className="bg-transparent outline-none text-sm w-full "
                />
              </div>
              <div className="w-[100%] flex gap-3 ">
                {options.map((option, index) => (
                  <React.Fragment key={index}>
                    {index !== 0 && (
                      <Image
                        src="/assets/Line 1.png"
                        alt="Line"
                        width={4}
                        height={4}
                      />
                    )}
                    <div className="w-full">
                      <h4>{option.title}</h4>
                      <span className="text-sm text-black/50">
                        {option.subtitle}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
                <div className="w-full flex justify-end items-center">
                  <Image
                    src="/assets/Frame 22.png"
                    alt="Line"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <Image src="/assets/Line 1.png" alt="Line" width={2} height={2} /> */}

          <div className="flex items-center gap-3">
            <button className="bg-teal-600 text-white text-sm px-8 py-4 rounded-full ">
              Sign in
            </button>
            <button className="bg-white-600 text-black px-8 py-4 shadow-md rounded-full text-sm">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex w-[80%] overflow-x-auto gap-8 px-4 py-2 m-auto rounded-full"
        style={{
          ...scrollBar,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div key={index} className="flex items-center gap-8">
            {property.category.map((cat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center min-w-[80px] cursor-pointer"
              >
                {" "}
                <div className="w-8 h-8 mb-1 text-gray-600">
                  {/* Example: Use a placeholder or category-based icon */}
                  <Image
                    src={property.icon}
                    alt="Icons"
                    width={120}
                    height={120}
                  />
                </div>
                <span className="text-xs text-gray-700">{cat}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
