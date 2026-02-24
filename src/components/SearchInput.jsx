import { useTheme } from "../context/useTheme";
import { IoMdSearch } from "react-icons/io";

// const SearchInput = ({searchQuery, onSearch}) => {
const SearchInput = () => {
  const { mode } = useTheme();
  return (
    <div
      className={`${mode ? "bg-[#ffffff]" : "bg-[#2b3945]"} flex items-center gap-3 px-4 rounded-md shadow-sm w-72`}
    >
      <IoMdSearch
        className={`${mode ? "text-[#111517]" : "text-white"} w-5 h-5`}
      />
      <input
        type="text"
        placeholder="Search for a country"
        // value={searchQuery}
        // onChange={(e) => onSearch(e.target.value)}
        value=""
        onChange=""
        className={`${mode ? "text-[#111517]" : "text-white"} bg-transparent outline-none placeholder-gray-400 w-full`}
      />
    </div>
  );
};

export default SearchInput;
