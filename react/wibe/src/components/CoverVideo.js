import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import image2 from "../assets/Images/aaaa.jpg";
import { TypingTextBanner } from "./CustomTexts";
const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }
`;
const Header = styled(motion.h1)`
  font-family: "Kaushan Script";
  font-size: 10rem;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  font-weight: 300;
  @media (max-width: 42em) {
    font-size: 4rem;
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div variants={staggerContainer}>
          <Header variants={item}>W</Header>
          <Header variants={item}>e</Header>
          <Header variants={item}>b</Header>
          <Header variants={item}>k</Header>
          <Header variants={item}>i</Header>
          <Header variants={item}>n</Header>
          <Header variants={item}>g</Header>
          <Header variants={item}>s</Header>
        </div>
        <TypingTextBanner
          style={{ fontSize: "30px" }}
          title="| Wyróżnij się."
          textStyles="text-center"
        />
        <TypingTextBanner title="| Zbuduj zaufanie." textStyles="text-center" />
        <TypingTextBanner
          title="| Wykorzystaj możliwości."
          textStyles="text-center"
        />
      </Title>
      <img src={image2} />
    </VideoContainer>
  );
};

export default CoverVideo;
