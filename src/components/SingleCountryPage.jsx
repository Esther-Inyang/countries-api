import { useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// import flag from "../assets/flag.jpg";
import { countriesData } from "../data";
import { useTheme } from "../context/useTheme";

const SingleCountryPage = () => {
  const { mode } = useTheme();
  const { name } = useParams();

  const country = countriesData.find(
    (country) => country.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
  );

  if (!country) {
    return (
      <p className={`${mode ? "text-black" : "text-white"} text-center mt-10`}>
        Country not found
      </p>
    );
  }

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
              alt="Afghanistan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-100 basis-[48%] flex flex-col justify-center">
            <div>
              <h2 className="text-2xl font-bold mb-10">{country.name}</h2>
              <div className="flex gap-10 items-center">
                <div>
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-medium">Native Name:</span>
                    <span className="font-normal">{country.nativeName}</span>
                  </p>
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-medium">Population:</span>
                    <span className="font-normal">
                      {country.population.toLocaleString()}
                    </span>
                  </p>
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-medium">Region:</span>
                    <span className="font-normal">{country.region}</span>
                  </p>
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-medium">Sub Region:</span>
                    <span className="font-normal">{country.subregion}</span>
                  </p>
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-medium">Captical:</span>
                    <span className="font-normal">{country.capital}</span>
                  </p>
                </div>
                <div>
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-medium">Top Level Domain:</span>
                    <span className="font-normal">
                      {country.topLevelDomain}
                    </span>
                  </p>
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-medium">Currencies:</span>
                    <span className="font-normal">
                      {country.currencies
                        .map((currency) => currency.name)
                        .join(", ")}
                    </span>
                  </p>
                  <p
                    className={`${mode ? "text-gray-900" : "text-gray-300"} flex gap-2 text-base`}
                  >
                    <span className="font-medium">Languages:</span>
                    <span className="font-normal">
                      {country.languages
                        .map((language) => language.name)
                        .join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex gap-5 items-center">
              <p className="font-medium text-base">Border Countries:</p>
              <div className="flex flex-wrap gap-5">
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
