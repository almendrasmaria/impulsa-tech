import { Header, About, HowItWorks, Contact, Footer } from "./components";

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <HowItWorks/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default App;
