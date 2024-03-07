"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function Pagination() {
  const path = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  return (
    <div className="flex justify-between items-center mt-11 mb-32">
      {startIndex >= 10 && (
        <button className=" hover:bg-neutral-900/30 rounded-lg border border-neutral-800/15 h-7 w-fit px-5 text-neutral-400 text-sm">
          <Link
            href={`${path}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
          >
            Previous
          </Link>
        </button>
      )}

      {startIndex <= 90 && (
        <button className=" hover:bg-neutral-900/30 rounded-lg border border-neutral-800/15 h-7 w-fit px-5 text-neutral-400 text-sm">
          <Link
            href={`${path}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
          >
            Next
          </Link>
        </button>
      )}
    </div>
  );
}

export default Pagination;
