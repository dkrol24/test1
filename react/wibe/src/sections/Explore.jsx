"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { exploreWorlds } from "../constants";
import { staggerContainer } from "../utils/motion";
import ExploreCard from "../components/ExploreCard";
import { TitleText, TypingText } from "../components/CustomTexts";
import styled from "styled-components";
const Section = styled.section``;
const Container = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  position: relative;
  text-align: center;
`;
const ItemsContainer = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  min-height: 70vh;
  margin: 5px;
  @media (max-width: 1281px) {
    flex-direction: column;
  }
`;
const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <Section id="explore">
      <Container
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| Projekty" textStyles="text-center" />
        <TitleText
          title={<>Kilka moich stron internetowych</>}
          textStyles="text-center"
        />
        <ItemsContainer as={motion.div}>
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </ItemsContainer>
      </Container>
    </Section>
  );
};

export default Explore;
