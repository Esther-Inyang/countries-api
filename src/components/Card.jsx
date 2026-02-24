// import { useState } from "react";
import { useTheme } from "../context/useTheme";
import { Link } from "react-router-dom";
import { countriesData } from "../data";
// https://restcountries.com

const Card = () => {
  // const [countries, setCountries] = useState([]);
  const { mode } = useTheme();

  return (
    <div>
      <div className="mt-20 pb-20 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10">
        {countriesData.map((country) => {
          return (
            <Link
              to={`/country/${country.name}`}
              key={country.name}
              className="basis-[23%] rounded-md shadow-md mb-10 flex flex-col"
            >
              <div className="w-full h-48">
                <img
                  src={country.flags.svg}
                  alt={country.name}
                  className="w-full h-full object-cover rounded-t-md"
                />
              </div>
              <div
                className={`${mode ? "bg-[#ffffff]" : "bg-[#2b3945]"} px-5 py-7 rounded-b-md shadow-md grow`}
              >
                <h2
                  className={`text-lg font-bold ${mode ? "text-gray-900" : "text-white"}`}
                >
                  {country.name}
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
                    {country.capital}
                  </span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
