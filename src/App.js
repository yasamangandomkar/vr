import { useState, useEffect } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Experience from "./components/Experience";
import Headsets from "./components/Headsets";
import About from "./components/About";
import Explore from "./components/Explore";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import NavMobile from "./components/NavMobile";
const App = () => {
  const [navMobile, setNavMobile] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);

  return (
    <div className="bg-purple w-full h-full text-white">
      <Layout>
        <Header setNavMobile={setNavMobile} />
        <div
          className={`${
            navMobile ? "right-0" : "-right-full"
          } fixed top-0 bottom-0 w-48 transition-all`}
        >
          <NavMobile setNavMobile={setNavMobile} />
        </div>
        <Experience />
        <Headsets />
        <About />
        <Explore />
      </Layout>
    </div>
  );
};

export default App;
