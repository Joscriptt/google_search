import Image from "next/image";
import React from "react";
import { TbGridDots } from "react-icons/tb";

function Header() {
  return (
    <header>
      <nav className=" px-7  h-12 flex justify-between items-center border-b border-neutral-700 text-white ">
        <div className="flex items-center gap-x-4">
          <div className="p-2 rounded-lg bg-[#313131] w-fit  ">
            <TbGridDots />
          </div>
          <p className=" ">Store</p>
        </div>

        <div>
          <ul className="flex items-center gap-x-5">
            <li>Images</li>
            <li>Gmail</li>
            <li>
              <Image
                width={600}
                height={600}
                className="w-8 h-8 rounded-full object-top"
                src="/jo.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
