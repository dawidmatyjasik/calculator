import React, { useEffect, useState } from "react";
import {
  HeaderCircle,
  HeaderContainer,
  HeaderMod,
  HeaderMods,
  HeaderSlider,
  HeaderTheme,
  HeaderTitle,
  HeaderWrapper,
  HeaderSection,
} from "./HeaderElements";

const Header = ({ setCounter, counter }) => {
  const [left, setLeft] = useState(9);
  const handleClick = () => {
    setCounter(counter + 1);
    if (counter >= 2) {
      setCounter(0);
    }
  };
  const handlePosition = () => {
    switch (counter) {
      case 0:
        setLeft(12);
        break;
      case 1:
        setLeft(37);
        break;
      case 2:
        setLeft(66);
        break;
      default:
        setLeft(12);
        break;
    }
  };

  useEffect(() => {
    handlePosition();
  }, [counter]);

  return (
    <HeaderSection>
      <HeaderTitle>Calc</HeaderTitle>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderTheme>Theme</HeaderTheme>
          <HeaderSlider onClick={handleClick}>
            <HeaderMods>
              <HeaderMod>1</HeaderMod>
              <HeaderMod>2</HeaderMod>
              <HeaderMod>3</HeaderMod>
            </HeaderMods>
            <HeaderCircle left={left} />
          </HeaderSlider>
        </HeaderWrapper>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
