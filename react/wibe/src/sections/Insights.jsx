"use client";

import { motion } from "framer-motion";

import { insights } from "../constants";
import { staggerContainer } from "../utils/motion";
import InsightCard from "../components/InsightCard";
import { TitleText, TypingText } from "../components/CustomTexts";
import styled from "styled-components";
const Section = styled.section`
  padding: 8px;
  position: relative;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.section`
  margin: 5rem 0 0 0;
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Items = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
`;
const Insights = () => (
  <Section>
    <Container
      as={motion.div}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <TypingText title="| Atuty" textStyles="text-center" />
      <TitleText title={<>Dlaczego Webkings.com?</>} textStyles="text-center" />

      <Items>
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </Items>
    </Container>
  </Section>
);

export default Insights;
