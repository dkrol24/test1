import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";

import { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";

import ScrollTriggerProxy from "./components/ScrollTriggerProxy";

import Footer from "./sections/Footer";
import Loader from "./components/Loader";

import "./App.css";

import Questions from "./sections/Questions";
import Explore from "./sections/Explore";
import GetStarted from "./sections/GetStarted";
import Insights from "./sections/Insights";

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
        <ScrollTriggerProxy />
        <AnimatePresence>
          <main
            style={{ background: "rgba(0, 0, 0, 0.95)" }}
            data-scroll-container
            ref={containerRef}
          >
            <Home />
            <div style={{ position: "relative" }}>
              <div className="gradient-04" />
              <About />
            </div>

            <div style={{ position: "relative" }}>
              <div className="gradient-03" />
              <GetStarted />
            </div>

            <div style={{ position: "relative" }}>
              <div className="gradient-05" />
              <Explore />
            </div>
            <div style={{ position: "relative" }}>
              <div className="gradient-04" />
              <Insights />
            </div>
            <div style={{ position: "relative" }}>
              <div className="gradient-02" />
              <Questions />
            </div>

            <Footer />
          </main>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
