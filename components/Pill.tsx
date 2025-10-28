import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full text-sm border ${
      active
        ? "bg-blue-600 text-white border-blue-600"
        : "bg-white text-gray-700"
    }`}
  >
    {label}
  </button>
);

export default Pill;
