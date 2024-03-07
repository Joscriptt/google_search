"use client";

import React, { useState } from "react";

// import { COUNTRIES } from "@/data/countries";
// import CountrySelector from "@/components/CountrySelctor";
import SelectCountry from "./SelectCountry";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("AF");
  return (
    <div className="fixed bottom-0 w-full h-16 border-t border-neutral-800 flex justify-between items-center px-3 backdrop-blur-lg">
      <div className="hidden sm:block">
        {/* <CountrySelector
          id={"country-selector"}
          open={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          onChange={setCountry}
          selectedValue={COUNTRIES.find((option) => option.value === country)}
        /> */}
        <SelectCountry />
      </div>
      <p className=" text-center text-xs text-[#616161]">
        @Owned by Joscript. All Rights Reserverd {new Date().getFullYear()}
      </p>
      <div className="text-neutral-600 sm:flex items-center hidden text-xs gap-x-3 ">
        <span>Help</span>
        <span>Privacy</span>
        <span>Terms</span>
      </div>
    </div>
  );
}

export default Footer;
