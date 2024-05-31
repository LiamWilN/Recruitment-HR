import React from "react";
import { Settings, Mail, Tent } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-1/6 border-t-2 border-slate-300 flex justify-between">
      <div className="flex items-center ml-4 md:ml-8 h-full text-slate-400 font-semibold text-xs sm:text-base">
        Powered by RYS Property Holdings, Inc.
      </div>
      <div className="flex items-center mr-4 md:mr-8 gap-4">
        <Settings />
        <Mail />
        <Tent />
      </div>
    </div>
  );
};

export default Footer;
