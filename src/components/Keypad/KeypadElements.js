import styled from "styled-components";

export const KeypadContainer = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.background.keypad};
  border-radius: 10px;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 15px;
`;
export const KeyContainer = styled.button`
  grid-column-start: ${(props) => props.columnStart};
  grid-column-end: ${(props) => props.columnEnd};
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: ${({ theme, word, sum }) =>
    (word === true && theme.keys.keyBackground) ||
    (sum === true && theme.keys.toggleBackground) ||
    theme.keys.delBackground};
  border: none;
`;
export const KeyName = styled.h1`
  font-size: ${({ word, sum }) =>
    (sum && "1.2rem") || (word && "1.2rem") || "1.5rem"};
  color: ${({ theme, word, sum }) =>
    (word === true && theme.text.del) ||
    (sum === true && theme.text.sum) ||
    theme.text.content};
`;

export const KeyContainerWord = styled(KeyContainer)`
  background: ${({ theme }) => theme.keys.keyBackground};
`;
