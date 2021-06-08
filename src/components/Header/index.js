import React from "react";
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

const Header = () => {
  return (
    <HeaderSection>
      <HeaderTitle>Calc</HeaderTitle>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderTheme>Theme</HeaderTheme>
          <HeaderSlider>
            <HeaderMods>
              <HeaderMod>1</HeaderMod>
              <HeaderMod>2</HeaderMod>
              <HeaderMod>3</HeaderMod>
            </HeaderMods>
            <HeaderCircle />
          </HeaderSlider>
        </HeaderWrapper>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
