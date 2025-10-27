import { Header, About, HowItWorks, Contact, Footer } from "../components";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
