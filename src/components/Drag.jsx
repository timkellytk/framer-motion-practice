import { motion } from "framer-motion";
import styled from "styled-components";

const AnimatedDiv = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10%;
`;

const Drag = () => (
  <AnimatedDiv
    drag
    dragConstraints={{ top: -50, left: -50, bottom: 50, right: 50 }}
  />
);

export default Drag;
