import { useState } from "react";
import { useTheme } from "../context/useTheme";
import { IoIosArrowDown } from "react-icons/io";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Dropdown = ({ selectedRegion, onRegionChange }) => {
  const { mode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  const handleSelect = (region) => {
    if (region === selectedRegion) {
      onRegionChange("");
    } else {
      onRegionChange(region);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative w-52">
      {isOpen && (
        <div className="fixed inset-0 z-0" onClick={() => setIsOpen(false)} />
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${mode ? "bg-[#ffffff] border-gray-100" : "bg-[#2b3945] border-gray-600"} px-4 py-2 rounded-md shadow-sm flex items-center justify-between w-full border`}
      >
        <span
          className={`${mode ? "text-[#111517]" : "text-[#ffffff]"} font-bold text-sm lg:text-base`}
        >
          {selectedRegion || "Filter by Region"}
        </span>
        <IoIosArrowDown
          className={`${mode ? "text-[#111517]" : "text-[#ffffff]"} w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <ul
          className={`${mode ? "bg-[#ffffff] border-gray-50" : "bg-[#2b3945] border-transparent"} absolute z-20 mt-2 rounded-md shadow-lg w-full border  overflow-hidden`}
        >
          {regions.map((region) => (
            <li
              key={region}
              onClick={() => handleSelect(region)}
              className={`${selectedRegion === region ? (mode ? "bg-[#ebebeb] text-blue-600" : "bg-[#3a4a5a] text-blue-400 ") : mode ? "text-[#111517] hover:bg-[#ebebeb]" : "text-[#ffffff] hover:bg-[#3a4a5a]"} w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
