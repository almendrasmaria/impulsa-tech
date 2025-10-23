import { Header, About, HowItWorks, Contact } from "./components";

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <HowItWorks/>
      <Contact/>
    </div>
  );
}

export default App;
