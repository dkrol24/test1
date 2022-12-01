"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import korona from "../assets/Svgs/korona.svg";
const ExploreCard = ({
  id,
  imgUrl,
  title,
  link,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`${
      active === id ? "explorecard" : "explorecard2"
    } container-explorecard `}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "24px",
      }}
    />
    {active !== id ? (
      <h3 className="test-explorecardwyżej">{title}</h3>
    ) : (
      <div
        style={{
          position: "absolute",
          bottom: "0",
          padding: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          background: "rgba(0,0,0,0.5)",
          borderRadius: "54px",
        }}
      >
        <div className="test-explorecard">
          <img
            src={korona}
            alt="headset"
            style={{ width: "80%", objectFit: "contain" }}
          />
        </div>
        <a
          href={link}
          style={{
            fontSize: "12px",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          Odwiedź witrynę
        </a>
        <a
          href={link}
          style={{
            fontSize: "12px",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          {link}
        </a>
        <a
          href={link}
          style={{
            fontSize: "16px",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          {title}
        </a>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
