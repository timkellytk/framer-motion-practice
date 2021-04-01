import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ButtonBig = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 10%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="black"
    strokeLinecap="round"
    {...props}
  />
);

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav animate={isOpen ? "open" : "closed"}>
      <ButtonBig onClick={() => setIsOpen(!isOpen)}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </ButtonBig>
    </motion.nav>
  );
};

export default Menu;
