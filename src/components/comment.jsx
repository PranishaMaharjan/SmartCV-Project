import React from "react";

const Comment = () => {
  return (
    <>
      <div className="pt-[60px] h-[696px] bg-secondary-90">
        <div className="flex justify-center">
          <div className="text-center text-primary-90">
            <p className="font-bold text-[34px] capitalize">
              what people say about us
            </p>
            <p className="text-[16px]">
              Industry experts recommend us as a proven way to boost your
              career.
            </p>
          </div>
        </div>

        <div className="flex justify-between pl-10 pr-10 pt-10 pb-10 ">
          <div className="p-[40px] w-[400px] h-[270px] rounded-xl bg-primary-90">
            <div className="grid grid-rows-2 gap-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad mollit anim id est laborum.
              </p>
              <div className="h-[78px] flex gap-4">
                <img
                  className=""
                  src="../src/assets/comment/comment1.png"
                  alt="image"
                ></img>
                <div className="grid grid-rows-3">
                  <p className="font-bold">Nguyen Shane</p>
                  <p className="text-[14px]">Dog Trainer</p>

                  <div className="flex gap-[14px] pt-1 h-[20px]">
                    <img src="../src/assets/icon/TwitterIcon.png"></img>
                    <img src="../src/assets/icon/FacebookIcon.png"></img>
                    <img src="../src/assets/icon/Icon.png"></img>
                    <img src="../src/assets/icon/InstagramIcon.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-[40px] w-[400px] h-[270px] rounded-xl bg-primary-90">
            <div className="grid grid-rows-2 gap-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad mollit anim id est laborum.
              </p>
              <div className="h-[78px] flex gap-4">
                <img
                  className=""
                  src="../src/assets/comment/comment2.png"
                  alt="image"
                ></img>
                <div className="grid grid-rows-3">
                  <p className="font-bold">Miles Esther</p>
                  <p className="text-[14px]">President of Sales</p>

                  <div className="flex gap-[14px] pt-1 h-[20px]">
                    <img src="../src/assets/icon/TwitterIcon.png"></img>
                    <img src="../src/assets/icon/FacebookIcon.png"></img>
                    <img src="../src/assets/icon/Icon.png"></img>
                    <img src="../src/assets/icon/InstagramIcon.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-[40px] w-[400px] h-[270px] rounded-xl bg-primary-90">
            <div className="grid grid-rows-2 gap-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad mollit anim id est laborum.
              </p>
              <div className="h-[78px] flex gap-4">
                <img
                  className=""
                  src="../src/assets/comment/comment3.png"
                  alt="image"
                ></img>
                <div className="grid grid-rows-3">
                  <p className="font-bold">Henry Arthur</p>
                  <p className="text-[14px]">Marketing Coordinator</p>

                  <div className="flex gap-[14px] pt-1 h-[20px]">
                    <img src="../src/assets/icon/TwitterIcon.png"></img>
                    <img src="../src/assets/icon/FacebookIcon.png"></img>
                    <img src="../src/assets/icon/Icon.png"></img>
                    <img src="../src/assets/icon/InstagramIcon.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comment;
