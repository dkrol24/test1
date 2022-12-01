"use client";

import { motion } from "framer-motion";

import { startingFeatures } from "../constants";
import { TitleText, TypingText } from "../components/CustomTexts";
import StartSteps from "../components/StartSteps";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import korona from "../assets/Svgs/korona.svg";
import styled from "styled-components";
const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin: 8px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const Image = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    max-width: 400px;
  }
`;
const Text = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0 0 0;
`;
const GetStarted = () => (
  <Section as={motion.section}>
    <Container
      as={motion.div}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Image
        as={motion.div}
        initial="hidden"
        whileInView="show"
        variants={planetVariants("left")}
      >
        <img
          src={korona}
          alt="get-started"
          style={{ width: "90%", height: "80%", objectFit: "contain" }}
        />
      </Image>
      <Text as={motion.div} variants={fadeIn("left", "tween", 0.2, 1)}>
        <TypingText title="| Współpraca" />
        <TitleText title={<>Jak przebiega współpraca?</>} />
        <div
          style={{
            marginTop: "31px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "650px",
            margin: "24px",
          }}
        >
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </Text>
    </Container>
  </Section>
);

export default GetStarted;
