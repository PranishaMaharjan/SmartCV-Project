import React from "react";

function Navbar() {
  return (
    <div className="flex p-8 w-full h-[96px] justify-between drop-shadow-lg bg-primary-90 text-size">
      <div className="flex">
        <button className="pl-4 pr-4 bg-secondary-90">Logo</button>
      </div>

      <div className="flex p-1.5 gap-10 text-lg">
        <a
          className="align-middle pr-1 pl-1 pb-7 hover:border-b-3 hover:border-border-90 duration-150 hover:ease-in"
          href="#"
        >
          Home
        </a>
        <a
          className="align-middle pr-1 pl-1 pb-7  hover:border-b-3 hover:border-border-90 duration-150 hover:ease-in"
          href="#"
        >
          About us
        </a>
        <a
          className="align-middle pr-1 pl-1 pb-7 hover:border-b-3 hover:border-border-90 duration-150 hover:ease-in"
          href="#"
        >
          Templates
        </a>
        <a
          className="align-middle pr-1 pl-1 pb-7 hover:border-b-3 hover:border-border-90 duration-150 hover:ease-in"
          href="#"
        >
          My account
        </a>
      </div>

      <div className="flex gap-4 text-[18px]">
        <button className="px-6 pb-8 pt-2 rounded-md border-2 border-primary-90 hover:border-border-90 hover:shadow-lg duration-400">
          Login
        </button>
        <button className="px-6 pb-8 pt-2 border-2 border-border-90 rounded-md bg-login-90 text-white hover:bg-primary-90 hover:text-border-90 hover:shadow-lg duration-400">
          Register
        </button>
      </div>
    </div>
  );
}

export default Navbar;
