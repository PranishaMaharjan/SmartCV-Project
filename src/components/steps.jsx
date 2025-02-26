import React from "react";

function Steps() {
  return (
    <>
      <div className="h-[650px] pt-[80px] pl-[60px] pr-[60px] bg-primary-90">
        <h1 className="font-bold text-[40px] text-center mb-10">
          Simple Steps to Create Your CV
        </h1>
        <div className="flex h-[192px] justify-between text-primary-90">
          <div className="w-[380px] h-[192px] pt-8 pl-8 pr-6 pb-6 rounded-lg bg-secondary-90 drop-shadow-lg">
            <p className="font-semibold text-[24px] p-1">Step 1</p>
            <p className="font-400 text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="w-[380px] h-[192px] pt-8 pl-8 pr-6 pb-6 rounded-lg bg-secondary-90 drop-shadow-lg">
            <p className="font-semibold text-[24px] p-1">Step 2</p>
            <p className="font-400 text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="w-[380px] h-[192px] pt-8 pl-8 pr-6 pb-6 rounded-lg bg-secondary-90 drop-shadow-lg">
            <p className="font-semibold text-[24px] p-1">Step 3</p>
            <p className="font-400 text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>

        <div className="flex justify-center h-[120px]">
          <p className="pt-10 w-[640px] text-center text-[16px] font-normal">
            Join thousands of successful candidates, consultancies, and
            employers who have achieved their goals with our streamlined visa
            and employment solutions.
          </p>
        </div>

        <div className="flex justify-center">
          <button className="h-14 pt-3 pb-3 pr-6 pl-6 rounded-md border-2 border-login-90 bg-login-90 text-white shadow-md hover:bg-primary-90 hover:border-border-90 hover:border-2 hover:text-border-90 hover:ease-in-out duration-400">
            Create my CV
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[900px]"></hr>
      </div>
    </>
  );
}

export default Steps;
