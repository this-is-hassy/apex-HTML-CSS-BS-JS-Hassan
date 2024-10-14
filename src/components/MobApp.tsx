import Image from "next/image";
import React from "react";
import apple from "../../public/apple.svg";
import playstore from "../../public/playStore.svg";

const MobApp = () => {
  return (
    <div className="max-container pt-10 bg-getApp-img max-sm:bg-center  bg-no-repeat  max-sm:h-[600px] min-h-[750px] w-full flex flex-col">
      <h1 className="text-white max-sm:-mt-10 max-sm:pt-6 mt-6 text-center font-black text-6xl max-sm:text-base max-sm:px-16 max-sm:font-bold  text-wrap">
        DOWNLOAD THE APEXLOADS MOBILE APP
      </h1>
        <div className="flex justify-center mt-60 max-lg:hidden">
          <div className="flex  sm:flex-row xl:gap-72  lg:w-auto ">
            <a
              href="#"
              className="bg-black text-white px-4 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors w-full sm:w-48 xl:mr-72 "
            >
              <Image src={apple} alt="app-store" className="mr-2" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="bg-black text-white px-4 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors w-full sm:w-48 xl:mr-10"
            >
              <Image src={playstore} alt="playstore" className="mr-2" />
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
  );
};

export default MobApp;
