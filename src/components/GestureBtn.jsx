import { motion } from "framer-motion";
import styled from "styled-components";

const AnimatedDiv = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10%;
`;

const GestureBtn = () => (
  <AnimatedDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
);

export default GestureBtn;
