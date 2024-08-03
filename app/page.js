"use client";
import React, { useEffect, useState } from "react";

import { PiGoogleLogo } from "react-icons/pi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { useRouter } from "next/navigation";

import Snowfall from "react-snowfall";
import Image from "next/image";

function Home() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const route = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 1000);
    } else {
      route.push(`/search/web?searchTerm=${input}`);
      // console.log("Entered");
    }
  };

  const randomSearch = async (e) => {
    setLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!response) return;

    route.push(`/search/web?random=${response}`);
    setLoading(false);
  };
  return (
    <>
      <Snowfall color="grey" snowflakeCount={10} rotationSpeed={"2"} />
      <div className="relative top-3 ml-2">
        <div className="flex items-center ">
          <div className="h-10 w-10  ">
            <Image
              width={1000}
              height={1000}
              className="w-full  h-full object-cover"
              src="/memoj1.png"
              alt=""
            />
          </div>

          <div className="h-10 w-10 -mx-4">
            <Image
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              src="/memoji.png"
              alt=""
            />
          </div>

          <div className="h-10 w-10 ">
            <Image
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              src="/memoji2.png"
              alt=""
            />
          </div>

          <button className="bg-[#01FE0A] text-[#000000] text-xs h-9 rounded-full p-1 px-2 ml-1 ">
            Invite Friends
          </button>
        </div>

        <div className="text-neutral-500 text-sm mt-2">
          <p>3,4747,234 Searching...</p>
        </div>
      </div>

      <div className="relative   w-full hidden md:block">
        <div className="bg-black text-neutral-600 w-64 h-20 p-3 rounded-b-2xl rounded-r-2xl absolute lg:inset-40 top-3 ">
          <p className="text-neutral-600 text-sm">
            Beyond is beyond my expectations at this point. They are genius{" "}
            <span className="text-[#01FE0A]">#Joscrpt party</span>
          </p>
        </div>

        <div className="w-10 h-10 rounded-full absolute top-28  lg:inset-44 ">
          <div className="bg-transparent p-1 h-full w-full rounded-full">
            <Image
              width={1000}
              height={1000}
              className="w-full h-full rounded-full object-cover "
              src="/memoji.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center h-full w-full justify-center">
        <div className="mt-40">
          <h1 className="font-extrabold text-7xl text-neutral-700 text-center">
            Google
          </h1>

          <div className="absolute -z-40 top-14 ">
            <h1 className="md:text-[28rem] text-neutral-900/20">53</h1>
          </div>

          <div className=" my-6  relative">
            <div className="w-[28rem] overflow-x-scroll hide-scrollbar flex gap-x-3">
              <div className=" inset-0 w-20 bg-gradient-to-r from-[#080808]  from-25% to-transparent absolute h-10" />
              <div className="border border-neutral-900 rounded-xl p-1 flex items-center w-fit gap-x-3 shrink-0">
                <Image
                  width={100}
                  height={100}
                  className="w-7 h-7 rounded-full object-cover"
                  src="/pro.jpg"
                  alt=""
                />
                <p className="text-neutral-600 text-sm">Images</p>
              </div>
              <button
                onClick={randomSearch}
                disabled={loading}
                className="border border-neutral-900 rounded-xl p-1 flex items-center w-fit gap-x-3 shrink-0 disabled:opacity-40"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-7 h-7 rounded-full object-cover"
                  src="/eg1.jpg"
                  alt=""
                />
                <p className="text-neutral-600 text-sm">Random </p>
              </button>
              <div className="border border-neutral-900 rounded-xl p-1 flex items-center w-fit gap-x-3 shrink-0">
                <Image
                  width={100}
                  height={100}
                  className="w-7 h-7 rounded-full object-cover"
                  src="/eg3.jpg"
                  alt=""
                />
                <p className="text-neutral-600 text-sm">Apple Pro</p>
              </div>
              <div className="border border-neutral-900 rounded-xl p-1 flex items-center w-fit gap-x-3 shrink-0">
                <Image
                  width={100}
                  height={100}
                  className="w-7 h-7 rounded-full object-cover"
                  src="/eg.jpg"
                  alt=""
                />
                <p className="text-neutral-600 text-sm">Head Phones</p>
              </div>
              <div className="border border-neutral-900 rounded-xl p-1 flex items-center w-fit gap-x-2 shrink-0">
                <Image
                  width={100}
                  height={100}
                  className="w-7 h-7 rounded-full object-cover"
                  src="/eg14.jpg"
                  alt=""
                />
                <p className="text-neutral-600 text-sm">Watch</p>
              </div>

              <div className="  w-20 bg-gradient-to-l from-[#080808]  from-25% to-transparent absolute right-0 h-10" />
            </div>
          </div>

          <div className="px-6">
            <form
              // action=""
              onSubmit={handleSubmit}
              className="mt-5 bg-neutral-900 md:w-[26rem]  h-10 rounded-md px-3 flex items-center justify-between  gap-x-3"
            >
              {/* Icon */}
              <PiGoogleLogo className="text-neutral-500 text-2xl" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent outline-none w-full h-full text-neutral-600 placeholder:text-neutral-600"
                type="text"
                placeholder="Search here"
              />
              <button className="text-neutral-600 text-sm" type="submit">
                {loading ? (
                  <div>
                    <svg
                      fill="none"
                      class="h-8 w-8 animate-spin text-neutral-400"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </div>
                ) : (
                  <> Location</>
                )}
              </button>
            </form>
          </div>

          {error && (
            <section>
              <div className="text-neutral-500">You need to type something</div>
            </section>
          )}

          <div className="mt-7 flex justify-center flex-col items-center gap-y-2">
            <div className="border border-neutral-700 rounded-full w-fit p-2  cursor-pointer">
              <HiOutlineMicrophone className="text-neutral-700 text-2xl" />
            </div>
            <span className="text-neutral-700 uppercase text-xs">
              Try with voices
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

{
  /* <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative w-full bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
    <div class="grid h-96 grid-cols-3 place-items-center gap-10">
      <!-- 3 dot blink -->
      <div>
        <span class="inline-flex items-center gap-px">
          <span class="animate-blink mx-px h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
          <span class="animate-blink animation-delay-200 mx-px h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
          <span class="animate-blink animation-delay-[400ms] mx-px h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
        </span>
      </div>
      <!-- spin -->
      <div>
        <svg fill="none" class="h-8 w-8 animate-spin text-indigo-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z" fill="currentColor" fill-rule="evenodd" />
        </svg>
      </div>
      <!-- spin portion -->
      <div>
        <svg aria-hidden="true" role="status" class="mr-2 inline h-5 w-5 animate-spin text-indigo-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="rgb(79 70 229)"></path>
        </svg>
      </div>
      <!-- 3 dot blink - inverse -->
      <div>
        <button class="inline-flex h-10 w-32 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-75" disabled>
          <span class="inline-flex items-center gap-px">
            <span class="animate-blink mx-px h-1.5 w-1.5 rounded-full bg-white"></span>
            <span class="animate-blink animation-delay-150 mx-px h-1.5 w-1.5 rounded-full bg-white"></span>
            <span class="animate-blink animation-delay-300 mx-px h-1.5 w-1.5 rounded-full bg-white"></span>
          </span>
        </button>
      </div>
      <!-- spin inverse -->
      <div>
        <button class="inline-flex h-10 w-32 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-75" disabled>
          <svg fill="none" class="h-8 w-8 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z" fill="currentColor" fill-rule="evenodd" />
          </svg>
        </button>
      </div>
      <!-- spin portion inverse-->
      <div>
        <button class="inline-flex h-10 w-32 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-75" disabled>
          <svg aria-hidden="true" role="status" class="mr-2 inline h-5 w-5 animate-spin text-indigo-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#FFF"></path>
          </svg>
        </button>
      </div>
      <!-- double spin -->
      <div>
        <span class="relative inset-0 inline-flex h-6 w-6 animate-spin items-center justify-center rounded-full border-2 border-gray-300 after:absolute after:h-8 after:w-8 after:rounded-full after:border-2 after:border-y-indigo-500 after:border-x-transparent"></span>
      </div>
      <!-- scale / pulse -->
      <div>
        <span class="relative isolate inline-flex items-center justify-center">
          <span class="animate-scale absolute z-0 h-8 w-8 rounded-full bg-indigo-400/60"></span>
          <span class="animate-scale animation-delay-1000 absolute z-10 h-8 w-8 rounded-full bg-indigo-400/60"></span>
        </span>
      </div>
      <!-- grid fade -->
      <div>
        <span class="grid grid-cols-3 grid-rows-3 gap-px">
          <span class="animate-fade mx-px h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
          <span class="animate-fade animation-delay-300 mx-px h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
          <span class="animate-fade animation-delay-700 mx-px h-1.5 w-1.5 rounded-full bg-indigo-600"></span>

          <span class="animate-fade animation-delay-100 mx-px h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
          <span class="animate-fade animation-delay-500 mx-px h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
          <span class="animate-fade animation-delay-300 mx-px h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
          <span class="animate-fade animation-delay-700 mx-px h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
          <span class="animate-fade animation-delay-500 mx-px h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
          <span class="animate-fade animation-delay-200 mx-px h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
        </span>
      </div>
      <!-- perspective -->
      <div>
        <span class="animate-perspective inline-flex h-6 w-6 bg-indigo-500"></span>
      </div>
      <!--classic spin -->
      <div>
        <span class="inline-flex h-6 w-6 animate-spin rounded-full border-4 border-dotted border-indigo-600"></span>
      </div>
      <!-- Classic fadeIn -->
      <div>
        <div class="[&>span]:before:animate-fadeIn relative h-6 w-6 [&>span]:absolute [&>span]:inset-0 [&>span]:inline-flex [&>span]:h-full [&>span]:w-full [&>span]:before:h-1 [&>span]:before:w-1 [&>span]:before:rounded-full [&>span]:before:bg-indigo-600">
          <span class=""></span>
          <span class="before:!animation-delay-[-1.1s] rotate-[30deg]"></span>
          <span class="before:!animation-delay-[-1s] rotate-[60deg]"></span>
          <span class="before:!animation-delay-[-0.9s] rotate-[90deg]"></span>
          <span class="before:!animation-delay-[-0.8s] rotate-[120deg]"></span>
          <span class="before:!animation-delay-[-0.7s] rotate-[150deg]"></span>
          <span class="before:!animation-delay-[-0.6s] rotate-[180deg]"></span>
          <span class="before:!animation-delay-[-0.5s] rotate-[210deg]"></span>
          <span class="before:!animation-delay-[-0.4s] rotate-[240deg]"></span>
          <span class="before:!animation-delay-[-0.3s] rotate-[270deg]"></span>
          <span class="before:!animation-delay-[-0.2s] rotate-[300deg]"></span>
          <span class="before:!animation-delay-[-0.1s] rotate-[330deg]"></span>
        </div>
      </div>
    </div>
    <!-- / grid -->
  </div>
</div> */
}
