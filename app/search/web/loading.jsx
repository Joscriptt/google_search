import React from "react";

function loading() {
  return (
    <div className="max-w-4xl mx-auto  px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 mt-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="my-3">
          <div className="relative space-y-5 overflow-hidden rounded-2xl bg-neutral-600/5 p-2.5 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/10 before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent">
            <div className="h-12 rounded-lg bg-neutral-700/10"></div>
            <div className="space-y-3">
              <div className="h-3 w-3/5 rounded-lg bg-neutral-700/10"></div>
              <div className="h-3 w-4/5 rounded-lg bg-neutral-700/20"></div>
              <div className="h-3 w-2/5 rounded-lg bg-neutral-700/20"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default loading;
