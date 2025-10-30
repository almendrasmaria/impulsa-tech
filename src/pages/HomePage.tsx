import { Hero, About, HowItWorks, Contact, Footer } from "../components";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
