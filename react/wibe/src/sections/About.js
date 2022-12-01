import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/about.jpg";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { portfolioAnimations, homeAnimation } from "../components/animation";
const Section = styled.section`
  position: relative;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: white;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;
const Left = styled(motion.div)`
  width: 100%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  padding: 1rem;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(3px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`;
const Right = styled(motion.div)`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  img {
    width: 100%;
    height: auto;
    border-radius: 32px;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100vh;
      object-fit: cover;
    }
  }
`;

const About = () => {
  const [element, controls] = useScroll();
  return (
    <Section ref={element} id="ofirmie">
      <Title>Cześć !</Title>
      <Left
        variants={homeAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <p style={{ color: "#B0B0B0" }}>
          Nazywam się Dawid Król i pracuję w internecie od ponad 3 lat tworząc
          strony i sklepy internetowe dla klientów z każdej branży!
        </p>
        <br />
        <p style={{ color: "#B0B0B0" }}>
          Tworzenie stron to nie tylko moja praca ale i pasja dzięki której
          każdego dnia się rozwijam.{" "}
        </p>
        <br />
        <p style={{ color: "#B0B0B0" }}>
          Moim celem jest to aby firma w internecie wyróżniała się na tle
          konkurencji. Dlatego nie korzystam z gotowych szablonów tylko tworzę
          je od zera aby każdej realizacji nadać unikalny charakter.{" "}
        </p>
      </Left>
      <Right
        variants={portfolioAnimations}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <img src={img1} alt="About Us" />
      </Right>
    </Section>
  );
};

export default About;
