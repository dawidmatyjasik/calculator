import React from "react";
import Header from "../components/Header";
import Result from "../components/Result";
import { Wrapper } from "./Elements";

const Page = ({ counter, setCounter }) => {
  return (
    <Wrapper>
      <Header counter={counter} setCounter={setCounter} />
      <Result />
    </Wrapper>
  );
};

export default Page;
