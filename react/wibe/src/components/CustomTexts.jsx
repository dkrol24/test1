"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingTextBanner = ({ title }) => (
  <motion.p
    variants={textContainer}
    style={{ fontSize: "22px", color: "white" }}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
export const TypingText = ({ title }) => (
  <motion.p
    variants={textContainer}
    style={{ fontSize: "14px", color: "white" }}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    style={{
      marginTop: "8px",
      fontWeight: "bolder",
      fontSize: "34px",
      color: "white",
    }}
  >
    {title}
  </motion.h2>
);
