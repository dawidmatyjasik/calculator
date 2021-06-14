import { useSelector } from "react-redux";
import "./ScreenElements";
import { PrevValue, Screen, Value } from "./ScreenElements";
const Result = () => {
  const result = useSelector((state) => state.counter.value);
  const prevResult = useSelector((state) => state.counter.prevValue);

  return (
    <>
      <Screen type="text" className="screen">
        <PrevValue>{prevResult}</PrevValue>
        <Value>{result}</Value>
      </Screen>
    </>
  );
};

export default Result;
