import Key from "./Key";
import { KeypadContainer } from "./KeypadElements";

const Keypad = () => {
  return (
    <KeypadContainer>
      <Key name={7}></Key>
      <Key name={8}></Key>
      <Key name={9}></Key>
      <Key name={"DEL"} word></Key>
      <Key name={4}></Key>
      <Key name={5}></Key>
      <Key name={6}></Key>
      <Key name={"+"}></Key>
      <Key name={1}></Key>
      <Key name={2}></Key>
      <Key name={3}></Key>
      <Key name={"-"}></Key>
      <Key name={"."}></Key>
      <Key name={0}></Key>
      <Key name={"/"}></Key>
      <Key name={"x"}></Key>
      <Key
        secondary
        name={"RESET"}
        word
        columnStart={1}
        columnEnd={3}
        rowStart={5}
        rowEnd={6}
      ></Key>
      <Key
        name={"="}
        columnStart={3}
        columnEnd={5}
        rowStart={5}
        rowEnd={6}
        sum
      ></Key>
    </KeypadContainer>
  );
};

export default Keypad;
