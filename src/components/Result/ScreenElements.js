import styled from "styled-components";

export const Screen = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  text-align: right;
  padding: 0 2rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.text.keys};
  background-color: ${({ theme }) => theme.background.screen};
  font-weight: 700;
  caret-color: transparent;
`;
