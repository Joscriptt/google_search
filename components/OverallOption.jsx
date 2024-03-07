"use client";

import React, { Suspense } from "react";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

function OverallOption() {
  const getSearch = useSearchParams();
  const route = useRouter();
  const path = usePathname();
  const searchTerm = getSearch.get("searchTerm");

  const handleClick = (cat) => {
    // setIsOpen(!isOpen);
    // cycleOpen(!open);

    route.push(
      `/search/${cat === "images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };
  return (
    <Suspense>
      <div className=" max-w-4xl mx-auto  px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 my-5 ">
        <div className="gap-x-4 w-full flex">
          <button
            onClick={() => handleClick("all")}
            className={`border border-neutral-800 text-neutral-500 rounded-lg w-fit  px-2.5 h-8 bg-neutral-800/20 active:text-red-600  ${
              path === "/search/web" && "!text-red-600"
            }`}
          >
            <p className="text-xs ">View All</p>
          </button>
          <button
            onClick={() => handleClick("images")}
            className={`border border-neutral-800 text-neutral-500 rounded-lg w-fit h-auto px-2.5  bg-neutral-800/20 active:text-red-600  ${
              path === "/search/image" && "!text-red-600"
            }`}
          >
            <p className="text-xs ">View Images</p>
          </button>
        </div>
      </div>
    </Suspense>
  );
}

export default OverallOption;
