import { motion } from "framer-motion";
import styled from "styled-components";

const AnimatedDiv = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10%;
`;

const SpinningSquare = () => (
  <AnimatedDiv
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
    }}
  />
);

export default SpinningSquare;
