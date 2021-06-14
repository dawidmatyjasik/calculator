import styled from "styled-components";

export const Screen = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  padding: 0 2rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.text.keys};
  background-color: ${({ theme }) => theme.background.screen};
  font-weight: 700;
  caret-color: transparent;
`;
export const PrevValue = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: grey;
`;
export const Value = styled.h2`
  font-size: 2.5rem;
`;
