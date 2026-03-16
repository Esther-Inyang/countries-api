import Hero from "./Hero";
import Navbar from "./Navbar";
import { useTheme } from "../context/useTheme";

const Home = () => {
  const { mode } = useTheme();

  return (
    <div className={`${mode ? "bg-[#fcfcfc]" : "bg-[#202c37]"} min-h-screen`}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
