import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../context/useTheme";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// import flag from "../assets/flag.jpg";
// import { countriesData } from "../data";
import axiosInstance from "../axiosInstance";

const SingleCountryPage = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { mode } = useTheme();
  const { name } = useParams();

  useEffect(() => {
    axiosInstance
      .get(
        `/name/${name}?fields=name,capital,population,region,subregion,flags,tld,currencies,languages,borders`,
      )
      .then((res) => {
        setCountry(res.data[0]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [name]);

  if (loading)
    return (
      <p className={`${mode ? "text-black" : "text-white"} text-center mt-10`}>
        Loading...
      </p>
    );
  if (error)
    return <p className={`text-red-500 text-center mt-10`}>Error: {error}</p>;
  if (!country)
    return (
      <p className={`${mode ? "text-black" : "text-white"} text-center mt-10`}>
        Country not found
      </p>
    );

  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0].common
    : country.name.common;

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(",")
    : "N/A";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const topLevelDomain = country.tld ? country.tld.join(",") : "N/A";

  // const country = countriesData.find(
  //   (country) => country.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
  // );

  return (
    <div
      className={`${mode ? "bg-[#fcfcfc] text-black" : "bg-[#202c37] text-white"} pb-32 min-h-screen`}
    >
      <Navbar />
      <div>
        <div className="w-fit">
          <Link
            to="/"
            className={`flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-md shadow-md mt-10 ml-10 transition-colors duration-300 cursor-pointer ${mode ? "bg-[#fcfcfc] text-black hover:bg-gray-200" : "bg-[#202c37] text-white hover:bg-gray-700"}`}
          >
            <MdOutlineKeyboardArrowLeft className="text-lg" />
            Back
          </Link>
        </div>

        <div className="px-10 mt-10 flex flex-col lg:flex-row justify-between">
          <div className="basis-[48%]">
            <img
              src={country.flags.svg}
              alt={country.flags.alt || country.name.common}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-100 basis-[48%] flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row lg:gap-0 lg:items-center justify-between">
              <div className="basis-[55%] mt-10 lg:mt-0">
                <h2 className="text-2xl font-bold">{country.name.common}</h2>

                <div className="mt-5 flex flex-col gap-4 lg:gap-2">
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-bold">Native Name:</span>
                    <span className="font-normal">{nativeName}</span>
                  </p>
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-bold">Population:</span>
                    <span className="font-normal">
                      {country.population.toLocaleString()}
                    </span>
                  </p>
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-bold">Region:</span>
                    <span className="font-normal">{country.region}</span>
                  </p>
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-bold">Sub Region:</span>
                    <span className="font-normal">{country.subregion}</span>
                  </p>
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-bold">Captical:</span>
                    <span className="font-normal">
                      {country.capital ? country.capital[0] : "N/A"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="basis-[42%] flex flex-col gap-4 lg:gap-2 mt-10 lg:mt-0">
                <p
                  className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                >
                  <span className="font-bold">Top Level Domain:</span>
                  <span className="font-normal">{topLevelDomain}</span>
                </p>
                <p
                  className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                >
                  <span className="font-bold">Currencies:</span>
                  <span className="font-normal">{currencies}</span>
                </p>
                <p
                  className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                >
                  <span className="font-bold">Languages:</span>
                  <span className="font-normal">{languages}</span>
                </p>
              </div>
            </div>
            <div className="mt-10 lg:flex lg:gap-5 lg:items-center">
              <p className="font-bold text-base">Border Countries:</p>
              <div className="mt-5 lg:mt-0 flex flex-wrap gap-5">
                {!country.borders || country.borders.length === 0 ? (
                  <span
                    className={`${mode ? "bg-gray-100 text-gray-900" : "bg-gray-800 text-gray-300"} px-3 py-1 border border-gray-200 rounded-md text-base`}
                  >
                    No Border Countries
                  </span>
                ) : (
                  country.borders.map((border) => (
                    <span
                      key={border}
                      className={`${mode ? "bg-gray-100 text-gray-900" : "bg-gray-800 text-gray-300"} px-3 py-1 border border-gray-200 rounded-md text-base`}
                    >
                      {border}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountryPage;
