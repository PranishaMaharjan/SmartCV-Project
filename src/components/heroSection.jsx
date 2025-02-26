import React, { useState } from "react";

function HeroSection() {
  return (
    <>
      <div className="h-[500px] bg-hero-90 pl-[80px] pt-[120px] bg-primary-90">
        <div className="w-[630px] h-[275px] grid grid-row-2 gap-x-20">
          <div className="">
            <h1 className="font-bold text-6xl">
              Your Dream Job Starts With a Smart CV
            </h1>
          </div>
          <div className="">
            <p className="font-normal text-lg ">
              Professional templates with real time editing. Instantly customize
              and downloads your own design in minutes.
            </p>
          </div>

          <div className="flex align-middle drop-shadow-lg">
            <button className="h-14 pt-3 pb-3 pr-6 pl-6 rounded-md border-2 border-login-90 bg-login-90 text-white shadow-md hover:bg-primary-90 hover:border-border-90 hover:border-2 hover:text-border-90 hover:ease-in-out duration-400">
              Create my CV
            </button>
          </div>
        </div>

        <img src=""></img>
      </div>
      <div className="flex justify-between pl-30 pr-30 pt-6 h-[130px] bg-secondary-90 drop-shadow-lg">
        <div className="col-2 h-[72px] w-[290]">
          <p className="text-[32px] text-center font-bold text-primary-90">
            1000
          </p>
          <p className="text-[16px] text-center font-normal text-primary-90">
            Total CV's Created
          </p>
        </div>

        <div className="col-2 h-[72px] w-[290]">
          <p className="text-[32px] text-center font-bold text-primary-90">
            900
          </p>
          <p className="text-[16px] text-center font-normal text-primary-90">
            Total CV's Approved
          </p>
        </div>

        <div className="col-2 h-[72px] w-[290]">
          <p className="text-[32px] text-center font-bold text-primary-90">
            2000
          </p>
          <p className="text-[16px] text-center font-normal text-primary-90">
            Total Jobs Provided
          </p>
        </div>

        <div className="col-2 h-[72px] w-[290]">
          <p className="text-[32px] text-center font-bold text-primary-90">
            3000
          </p>
          <p className="text-[16px] text-center font-normal text-primary-90">
            Total Visa Granted
          </p>
        </div>
      </div>
    </>
  );
}
export default HeroSection;
