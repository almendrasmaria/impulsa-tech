import Navbar from "./Navbar";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center bg-no-repeat flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <Navbar variant="dark" />

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <p className="uppercase font-semibold tracking-wide text-sm md:text-base">
          ÚNETE A <span className="text-[#84B3FF]">IMPULSATECH</span>
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold mt-2 mb-6 leading-tight">
          Encuentra tu primer <span className="text-[#84B3FF]">oportunidad</span>
        </h1>
        <SearchBar />
      </motion.div>
    </div>
  );
};

export default Hero;

