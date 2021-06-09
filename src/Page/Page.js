import React from "react";
import Header from "../components/Header/Header";
import Keypad from "../components/Keypad/Keypad";
import Result from "../components/Result/Result";
import { Wrapper } from "./Elements";

const Page = ({ counter, setCounter }) => {
  return (
    <Wrapper>
      <Header counter={counter} setCounter={setCounter} />
      <Result />
      <Keypad />
    </Wrapper>
  );
};

export default Page;
