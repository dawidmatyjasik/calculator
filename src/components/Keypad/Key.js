import React from "react";
import { useDispatch } from "react-redux";
import {
  divide,
  increment,
  multiply,
  reset,
  del,
  dot,
  total,
  decrement,
  add,
} from "../../redux/counterSlice";
import { KeyContainer, KeyName } from "./KeypadElements";

const Key = ({ columnStart, columnEnd, rowStart, rowEnd, name, word, sum }) => {
  const dispatch = useDispatch();

  const handleMath = () => {
    dispatch(add(isNaN(name) ? "" : name));
    switch (name) {
      case "RESET":
        dispatch(reset());
        break;
      case "DEL":
        dispatch(del());
        break;
      case ".":
        dispatch(dot());
        break;
      case "+":
        dispatch(increment());
        break;
      case "-":
        dispatch(decrement());
        break;
      case "x":
        dispatch(multiply());
        break;
      case "/":
        dispatch(divide());
        break;
      case "=":
        dispatch(total());
        break;
      default:
        break;
    }
  };
  return (
    <KeyContainer
      columnStart={columnStart}
      columnEnd={columnEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
      word={word}
      sum={sum}
      onClick={handleMath}
    >
      <KeyName word={word} sum={sum}>
        {name}
      </KeyName>
    </KeyContainer>
  );
};

export default Key;
