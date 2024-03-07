import Pagination from "@/components/Pagination";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function page({ searchParams }) {
  const startIndex = searchParams.start || "1";

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}&searchType=image&start=${startIndex}`
  );

  if (!response.ok) throw new Error("Something went wrong");

  const data = await response.json();
  const result = data.items;

  // console.log(result);

  // This error happens when your API credentials are correct but your search isn't something meaningfull
  if (!result) {
    return (
      <div className="flex justify-center flex-col items-center mt-52">
        <h1 className="text-neutral-600 text-2xl">
          No result found with the searh {searchParams.searchTerm}
        </h1>
        <p className="text-neutral-300 my-4">
          Try Searching something meaningful
        </p>
        <Link className="text-red-600" href={"/"}>
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mt-10 mb-11 mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {result.map((each) => (
          <div
            key={each.image.contextLink}
            className="grid gap-4 hover:bg-neutral-900/30 hover:p-3 p-3 rounded-lg border border-neutral-800/15"
          >
            <div>
              <Link href={each.image.contextLink}>
                <img
                  width={1000}
                  height={1000}
                  className="h-auto bg-neutral-600 object-cover  max-w-full rounded-lg"
                  src={each.link}
                  alt={each.title}
                />
                /{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default page;
