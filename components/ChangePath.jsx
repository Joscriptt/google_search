"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Header from "@/components/Header";
import TopHeaderSeacrch from "./TopHeaderSeacrch";

function ChangePath() {
  const path = usePathname();

  return <div>{path == "/" ? <Header /> : <TopHeaderSeacrch />}</div>;
}

export default ChangePath;
