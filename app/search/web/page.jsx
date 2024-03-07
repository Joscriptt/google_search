import Link from "next/link";
import React from "react";
import Parser from "html-react-parser";
import Pagination from "@/components/Pagination";

import { Suspense } from "react";

async function Web({ searchParams }) {
  // If the API Link is not correct, there the error page kicks in
  const startIndex = searchParams.start || "1";
  // await new Promise((resolve) => setTimeout(resolve, 10000));

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}&start=${startIndex}`
  );

  if (!response.ok) throw new Error("Something went wrong");

  const data = await response.json();
  const result = data.items;

  // console.log(result);

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

  // border border-neutral-800

  return (
    <div className="max-w-4xl mx-auto  px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 text-white ">
      <p className="bg-gradient-to-r from-neutral-500 to-pink-600 bg-clip-text text-transparent mt-10">
        About {result.searchInformation?.formattedTotalResults} resuls (
        {result.searchInformation?.formattedSearchTime} seconds)
      </p>

      {result &&
        result.map((each) => (
          <div
            className="mb-3  mt-3 hover:bg-neutral-900/30 hover:p-3 p-3 rounded-lg border border-neutral-800/15"
            key={each.link}
          >
            <div className="flex flex-col group">
              <Link href={each.link}>{each.formattedUrl}</Link>
              <Link
                className="bg-gradient-to-r from-neutral-800 to-white bg-clip-text text-transparent truncate font-medium text-lg"
                href={each.link}
              >
                {each.title}
              </Link>
            </div>

            <p className="text-neutral-500">{Parser(each.htmlSnippet)}</p>
          </div>
        ))}

      <Pagination />
    </div>
  );
}

export default Web;
