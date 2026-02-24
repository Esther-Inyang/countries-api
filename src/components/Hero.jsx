import Dropdown from "./Dropdown.jsx";
import SearchInput from "./SearchInput.jsx";

const Hero = () => {
  return (
    <div className="px-10 mt-10 flex justify-between">
      <SearchInput />
      <Dropdown />
    </div>
  );
};

export default Hero;
