import { Navbar, Hero, HowItWorks, Contact, Footer } from "../components";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
