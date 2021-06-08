import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.text.content};
  font-weight: 700;
  fon-size: 3rem;
  text-transform: lowercase;
  align-self: center;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderMods = styled.div`
  position: absolute;
  left: 17.5%;
  top: -75%;
  display: flex;
  justify-content: space-between;
  height: 30%;
  width: 45px;
`;

export const HeaderMod = styled.h3`
  color: ${({ theme }) => theme.text.content};
  font-size: 0.7rem;
`;
export const HeaderTheme = styled.h2`
  color: ${({ theme }) => theme.text.content};
  font-size: 0.7rem;
  letter-spacing: 1px;
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const HeaderCircle = styled.div`
  position: absolute;
  background: red;
  border-radius: 100%;
  top: 50%;
  transform: translateY(-50%);
  left: 9%;
  ${"" /* left: 9%; */}
  ${"" /* left: 37%; */}
  ${"" /* left: 66%; */}
  width: 17px;
  height: 17px;
  transition: all ease-in-out 0.4s;
`;

export const HeaderSlider = styled.div`
  position: relative;
  width: 66px;
  height: 25px;
  background-color: ${({ theme }) => theme.background.keypad};
  border-radius: 90px 90px 90px 90px;
  ${
    "" /* &:hover ${HeaderCircle} {
    left: 60%;
  } */
  }
`;
