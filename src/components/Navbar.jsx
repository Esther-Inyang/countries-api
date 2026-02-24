import { CgMoon } from "react-icons/cg";
import { useTheme } from "../context/useTheme";

const Navbar = () => {
  const { mode, switchMode } = useTheme();

  return (
    <div
      className={`${mode ? "bg-[#ffffff]" : "bg-[#2b3945]"} px-6 py-3 shadow-sm} shadow-sm`}
    >
      <div className="flex justify-between items-center">
        <p
          className={`${mode ? "text-[#111517]" : "text-[#ffffff]"} text-base font-bold `}
        >
          Where in the world?
        </p>
        <div>
          <button
            onClick={switchMode}
            className="flex items-center gap-2 cursor-pointer"
          >
            <CgMoon
              className={`${mode ? "text-[#2b3945]" : "text-[#ffffff]"}`}
            />
            <span
              className={`${mode ? "text-[#111517]" : "text-[#ffffff]"} text-sm font-bold`}
            >
              Dark Mode
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
