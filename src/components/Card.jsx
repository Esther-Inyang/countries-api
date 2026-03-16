import { useState, useEffect } from "react";
import { useTheme } from "../context/useTheme";
import { Link } from "react-router-dom";
// import { countriesData } from "../data";
import axiosInstance from "../axiosInstance";

const Card = ({ searchQuery = "", selectedRegion = "" }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { mode } = useTheme();

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await axiosInstance.get(
          "/all?fields=name,capital,currencies,flags,population,region",
        );
        setCountriesData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchCountriesData();
  }, []);

  // const filteredCountries = countriesData.filter(
  //   (country) =>
  //     country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) |
  //     country.region.toLowerCase().includes(searchQuery.toLowerCase()),
  // );

  const filteredCountries = countriesData.filter((country) => {
    const matchesSearch =
      searchQuery === "" ||
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.region.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion =
      selectedRegion === "" || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      {filteredCountries.length > 0 ? (
        <div className="mt-16 lg:mt-20 pb-20 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 lg:gap-7 xl:gap-10">
          {filteredCountries.map((country) => {
            return (
              <Link
                to={`/country/${country.name.common}`}
                key={country.name.common}
                className="basis-[23%] rounded-md mb-8 lg:mb-0 shadow-md flex flex-col"
              >
                <div className="w-full h-48">
                  <img
                    src={country.flags.svg}
                    alt={country.flags.alt || country.name.common}
                    className="w-full h-full object-cover rounded-t-md"
                  />
                </div>
                <div
                  className={`${mode ? "bg-[#ffffff]" : "bg-[#2b3945]"} px-5 py-7 rounded-b-md shadow-md grow`}
                >
                  <h2
                    className={`text-lg font-bold ${mode ? "text-gray-900" : "text-white"}`}
                  >
                    {country.name.common}
                  </h2>
                  <p className="flex gap-1 mt-2">
                    <span
                      className={`text-sm ${mode ? "text-gray-900" : "text-gray-300"} font-medium`}
                    >
                      Population:
                    </span>
                    <span
                      className={`text-sm font-normal ${mode ? "text-gray-900" : "text-gray-300"}`}
                    >
                      {country.population.toLocaleString()}
                    </span>
                  </p>
                  <p className="flex gap-1 my-1">
                    <span
                      className={`text-sm ${mode ? "text-gray-900" : "text-gray-300"} font-medium`}
                    >
                      Region:
                    </span>
                    <span
                      className={`text-sm font-normal ${mode ? "text-gray-900" : "text-gray-300"}`}
                    >
                      {country.region}
                    </span>
                  </p>
                  <p className="flex gap-1">
                    <span
                      className={`text-sm ${mode ? "text-gray-900" : "text-gray-300"} font-medium`}
                    >
                      Capital:
                    </span>
                    <span
                      className={`text-sm font-normal ${mode ? "text-gray-900" : "text-gray-300"}`}
                    >
                      {country.capital?.[0] || "N/A"}
                    </span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="mt-16 text-center text-base font-medium">
          No countries found matching your search!
        </div>
      )}
    </div>
  );
};

export default Card;
