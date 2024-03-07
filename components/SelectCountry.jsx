"use client";

import { useEffect, useState } from "react";

// import React from 'react'

function SelectCountry() {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getMyCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/63.70.164.200?key=${process.env.NEXT_PUBLIC_LOCATION}`
      )
        .then((res) => res.json())
        .then((data) => data.country);

      // console.log(response);

      if (!response) return;
      setCountry(response);
    };
    getMyCountry();
  }, []);
  return <div className="text-neutral-600 text-sm">{country}</div>;
}

export default SelectCountry;
