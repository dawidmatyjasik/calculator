import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyles";
import { dark, light, violet } from "./theme/theme";
import Page from "./Page/Page";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState(dark);
  const handleMenu = () => {
    switch (counter) {
      case 0:
        setTheme(dark);
        break;
      case 1:
        setTheme(light);
        break;
      case 2:
        setTheme(violet);
        break;
      default:
        setTheme(dark);
        break;
    }
  };
  useEffect(() => {
    handleMenu();
  }, [counter]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page counter={counter} setCounter={setCounter} />
    </ThemeProvider>
  );
}

export default App;
