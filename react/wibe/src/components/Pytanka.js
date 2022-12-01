import React from "react";
import { motion } from "framer-motion";

const Pytanka = (item) => {
  return (
    <motion.li layout className="liqa">
      <p style={{ color: "white" }}>{item.title}</p>
      <p>{item.desc}</p>
    </motion.li>
  );
};

export default Pytanka;
