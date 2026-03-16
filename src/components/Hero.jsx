import { useState } from "react";
import Dropdown from "./Dropdown.jsx";
import SearchInput from "./SearchInput.jsx";
import Card from "./Card.jsx";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div>
      <div className="px-10 mt-10 flex flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between">
        <SearchInput searchQuery={searchQuery} onSearch={setSearchQuery} />
        <Dropdown
          selectedRegion={selectedRegion}
          onRegionChange={handleRegionChange}
        />
      </div>
      <Card searchQuery={searchQuery} selectedRegion={selectedRegion} />
    </div>
  );
};

export default Hero;
