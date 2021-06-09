import { useState } from "react";
import "./ScreenElements";
import { Screen } from "./ScreenElements";
const Result = () => {
  const [result, setResult] = useState(0);
  return (
    <>
      <Screen type="text" className="screen" value={result} readOnly />
    </>
  );
};

export default Result;
