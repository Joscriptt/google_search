import OverallOption from "@/components/OverallOption";
import React from "react";

// import { Suspense } from "react";
// import { ProgressBar } from "next-nprogress-bar";

function layout({ children }) {
  return (
    <div>
      {/* <Suspense> */}
      <OverallOption />
      {children}
      {/* </Suspense> */}
    </div>
  );
}

export default layout;
