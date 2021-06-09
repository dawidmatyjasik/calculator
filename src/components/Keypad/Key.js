import React from "react";
import { KeyContainer, KeyName } from "./KeypadElements";

const Key = ({ columnStart, columnEnd, rowStart, rowEnd, name, word, sum }) => {
  return (
    <KeyContainer
      columnStart={columnStart}
      columnEnd={columnEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
      word={word}
      sum={sum}
    >
      <KeyName word={word} sum={sum}>
        {name}
      </KeyName>
    </KeyContainer>
  );
};

export default Key;
