import About from "./component/About";
import AllInOne from "./component/AllInOne";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Support from "./component/Support";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
    </>
  );
}

export default App;
