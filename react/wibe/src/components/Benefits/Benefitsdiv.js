import React from "react";
import { portfolioAnimations } from "../animation";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useScroll } from "../useScroll";

const Container = styled(motion.div)`
  padding: 15px;
  margin: 2rem;
  width: 100%;
  max-width: 350px;
  height: 100%;
  min-height: 420px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(32, 32, 32);
  border: 2px dotted white;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.7);

  @media (max-width: 48em) {
    width: 90vw;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 100px;
`;
const Headtext = styled.h1`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
  color: white;
  margin: 1rem 0 1rem 0;
`;
const Subtext = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  color: white;
`;

const Benefitsdiv = ({ title, desc, icon }) => {
  const [element, controls] = useScroll();
  return (
    <Container
      ref={element}
      variants={portfolioAnimations}
      animate={controls}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
    >
      <Icon>{icon}</Icon>
      <Headtext>{title}</Headtext>
      <Subtext>{desc}</Subtext>
    </Container>
  );
};

export default Benefitsdiv;
