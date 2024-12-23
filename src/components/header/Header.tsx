import { Link } from "react-router-dom";
import "./Header.scss";
import { BurgerButton } from "../burger-button/BurgerButton";
import { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Header = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  return (
    <>
      <section id="header">
        <p id="hk-text">Hélène & Kévin</p>
        <div id="links">
          <Link to="/">Acceuil</Link>
          <Link to="/infos">Infos</Link>
          <Link to="/logements">Logements</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
        <div id="burger">
          <BurgerButton
            isOpen={isSliderOpen}
            onClick={() => setIsSliderOpen((prev) => !prev)}
          />
        </div>
      </section>
      <Slider isOpen={isSliderOpen} />
    </>
  );
};

const Slider = ({ isOpen }: { isOpen: boolean }) => {
  const variants = {
    closed: { height: 0, padding: 0 },
    open: { height: 320, padding: 8 },
  };

  return (
    <SliderContainer
      id="slider"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <Link to="/">Acceuil</Link>
      <Link to="/infos">Infos</Link>
      <Link to="/logements">Logements</Link>
      <Link to="/photos">Photos</Link>
      <Link to="/contacts">Contacts</Link>
    </SliderContainer>
  );
};

const SliderContainer = styled(motion.div)`
  display: flex;
  position: absolute;
  right: 0;
  width: 200px;
  background-color: var(--color-green);
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  overflow: hidden;
`;
