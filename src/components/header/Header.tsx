import { Link } from "react-router-dom";
import "./Header.scss";
import { BurgerButton } from "../burger-button/BurgerButton";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Header = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  useEffect(() => {
    if (isSliderOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isSliderOpen]);

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
    open: { height: "100%", padding: 8 },
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
  top: 69px;
  right: 0;
  width: 100%;
  background-color: var(--color-green);
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1;
  overflow: hidden;
`;
