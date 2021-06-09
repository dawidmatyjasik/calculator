import React from "react";
import Header from "../components/Header";
import { Wrapper } from "./Elements";

const Page = ({ counter, setCounter }) => {
  return (
    <Wrapper>
      <Header counter={counter} setCounter={setCounter} />
    </Wrapper>
  );
};

export default Page;
