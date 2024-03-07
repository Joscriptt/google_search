"use client";

import { AnimatePresence, motion, useCycle } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PiX } from "react-icons/pi";
import { TbMapPinSearch } from "react-icons/tb";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

function TopHeaderSeacrch() {
  //
  const getSearch = useSearchParams();
  const route = useRouter();
  const path = usePathname();
  const searchTerm = getSearch.get("searchTerm");

  const [input, setInput] = useState(searchTerm || "");
  const [cancel, setCancel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  const [open, cycleOpen] = useCycle(false, true);

  // console.log(path);

  async function handleSubMit(e) {
    e.preventDefault();

    if (!input.trim()) return;

    setLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!response) return;

    // console.log(response);
    setData(response);

    route.push(`/search/web?searchTerm=${input}`);
    setInput("");
    setLoading(false);
    cycleOpen(false);
    setCancel(false);
  }

  function ShowIcon(e) {
    setInput(e.target.value);
    setCancel(e.target.value !== "");
  }

  const cancelClear = () => {
    setInput("");
    setLoading(false);
    setCancel(false);
  };

  const ButtonVariant = {
    closed: {
      height: "0px",
      display: "none",
      transition: { duration: 0.1 },
    },

    open: {
      height: "auto",
      display: "grid",
      gridTemplateColumn: "repeat(2, 1fr)",
      transition: { when: "beforeChildren", duration: 0.1 },
    },
  };

  const handleClick = (cat) => {
    cycleOpen(!open);

    route.push(
      `/search/${cat === "images" ? "images" : "web"}?searchTerm=${searchTerm}`
    );
  };

  return (
    <div className="sticky top-0 p-2 ">
      <nav className=" px-7  h-12 flex justify-between items-center border-b border-neutral-700 text-white ">
        <div className="flex items-center gap-x-4">
          <Link href={"/"} className=" ">
            Jobs
          </Link>
        </div>

        <form
          onSubmit={handleSubMit}
          className="w-1/2 flex items-center border rounded-xl h-8 border-neutral-800 px-2 "
        >
          <input
            value={input}
            onChange={ShowIcon}
            type="search"
            placeholder="Search here"
            className="bg-transparent placeholder:text-neutral-500 placeholder:text-sm pl-2   w-full  text-neutral-500 outline-none"
          />

          {loading ? (
            <button type="reset" onClick={cancelClear}>
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
            </button>
          ) : (
            <div
              onClick={cancelClear}
              className={`flex items-center cursor-pointer justify-center w-4 h-4 border border-neutral-800 rounded-full p-1 ${
                cancel ? "block" : "hidden"
              } `}
            >
              <PiX className="text-neutral-500   " />
            </div>
          )}
        </form>

        <div>
          <ul className="flex items-center gap-x-5">
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

      {/* <AnimatePresence>
        {data && (
          <motion.div
            key="parent"
            variants={ButtonVariant}
            initial="closed"
            animate={open ? "open" : "closed"}
            exit={{
              height: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className="w-full p-2 bg-neutral-900 rounded-lg max-w-6xl mx-auto mt-3 grid lg:grid-cols-2 "
          >
            <div className="lg:border-r  ">
              <div className="flex justify-between">
                <button className="text-sm text-neutral-400 flex items-center gap-x-2">
                  <TbMapPinSearch />
                  <span>Web</span>
                </button>
                <motion.button
                  initial="closed"
                  onClick={() => handleClick("web")}
                  className="text-xs pr-2 underline cursor-pointer text-neutral-400"
                >
                  View All
                </motion.button>
              </div>

              <div className="mt-2">
                <div className="bg-neutral-800 rounded-lg w-64 h-3" />
                <div className="bg-neutral-800 rounded-lg w-40 h-2.5 mt-1" />
              </div>
              <div className="mt-2">
                <div className="bg-neutral-800 rounded-lg w-52 h-3" />
                <div className="bg-neutral-800 rounded-lg w-40 h-2.5 mt-1" />
              </div>
              <div className="mt-2">
                <div className="bg-neutral-800 rounded-lg w-72 h-3" />
                <div className="bg-neutral-800 rounded-lg w-40 h-2.5 mt-1" />
              </div>
              <div className="mt-2">
                <div className="bg-neutral-800 rounded-lg w-64 h-3" />
                <div className="bg-neutral-800 rounded-lg w-40 h-2.5 mt-1" />
              </div>
            </div>
            <div className="px-2 mt-9 lg:mt-0">
              <div className="flex justify-between ">
                <button className="text-sm text-neutral-400">Images</button>
                <button className="text-xs pr-1 underline cursor-pointer text-neutral-400">
                  View All
                </button>
              </div>
              <div className="mt-2 flex flex-wrap  gap-2">
                <div className="bg-neutral-800 rounded-lg w-20 h-14" />
                <div className="bg-neutral-800 rounded-lg w-20 h-14" />
                <div className="bg-neutral-800 rounded-lg w-20 h-14" />
                <div className="bg-neutral-800 rounded-lg w-20 h-14" />
                <div className="bg-neutral-800 rounded-lg w-20 h-14" />
                <div className="bg-neutral-800 rounded-lg w-20 h-14" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
}

export default TopHeaderSeacrch;

{
  /* <AnimatePresence>
<motion.header
  key="parent"
  variants={ButtonVariant}
  initial="closed"
  animate={open ? "open" : "closed"}
  exit={{
    height: 0,
    transition: { delay: 0.7, duration: 0.3 },
  }}
  className={twMerge(
    "dark:bg-[#1C1C1C] bg-white w-full z-50  lg:px-28 md:px-5 border-neutral-700/30 border-b fixed top-0 "
  )}
>
  <div className="flex items-center  justify-between px-3 pt-5 ">
    <Link href={"/"}>
      <h1 className="uppercase font-InterBold text-xl">Joscript</h1>
    </Link>
    <Switch checked={checked} setChecked={setChecked} />

    <button
      onClick={handleClick}
      className="flex lg:hidden  flex-col mt-2 "
    >
      <span
        className={`bg-[#83868A] block transition-all duration-300 ease-out 
          h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
      ></span>
      <span
        className={`bg-[#83868A] block transition-all duration-300 ease-out 
          h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
      ></span>
      <span
        className={`bg-[#83868A] block transition-all duration-300 ease-out 
          h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
      ></span>
    </button>

    <div className="lg:flex gap-x-1 hidden">
      {links.map(({ name, href }, index) => {
        // you can use pathname if u want  to make the clicked link to have the background black. am just using hover in this tutorial
        const isActive = index === activeIndex;
        return (
          <motion.div
            key={index}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            className="flex relative  scale-100 px-4 text-neutral-400 hover:text-neutral-200 transition-all ease-in duration-200 flex-col font-InterRegular font-medium  text-sm"
          >
            {isActive && (
              <motion.span
                layoutId="highlight"
                className="bg-[#181818]  h-8 border border-neutral-700/40  -top-[5px] absolute inset-0 -z-[1] rounded-lg"
              ></motion.span>
            )}
            <Link href={href}>{name}</Link>
          </motion.div>
        );
      })}
    </div>

    <div className="lg:flex  hidden justify-center gap-x-6 ">
      {Icons.map((each) => (
        <div
          key={each}
          className="hover:text-neutral-100 cursor-pointer transition-all ease-in text-xl duration-200  text-neutral-500"
        >
          {each.name}
        </div>
      ))}
    </div>
  </div>

  {open && (
    <motion.div
      className="p-6 "
      initial={{ height: 0 }}
      animate={{
        height: 300,
      }}
      exit={{
        height: 0,
        transition: { delay: 0.1, duration: 0.1 },
      }}
    >
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
      >
        {links.map(({ name, href }) => (
          <motion.a
            className="flex flex-col font-InterRegular leading-10 font-medium  text-lg"
            key={name}
            whileHover={{ scale: 1.1 }}
            variants={itemVariants}
          >
            <Link href={href}>{name}</Link>
          </motion.a>
        ))}

        <div className="mt-6">
          {bootonLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className="ml-0  mx-7 gap-x-5 text-sm font-InterRegular hover:text-neutral-100 transition-all ease-in duration-200  text-neutral-500">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex  justify-center gap-x-11 mt-16 ">
          {Icons.map((each) => (
            <div
              key={each.name}
              className="hover:text-neutral-100 cursor-pointer transition-all ease-in duration-200  text-neutral-500"
            >
              {each.name}
            </div>
          ))}
        </div>
      </motion.div>
      <div className="cursor-pointer" onClick={() => cycleOpen(open)}>
        <IoMdClose />
      </div>
    </motion.div>
  )}
</motion.header>
</AnimatePresence> */
}
