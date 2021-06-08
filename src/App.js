import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyles";
import { dark, light, violet } from "./theme/theme";
import Header from "./components/Header";
import Page from "./Page";

const Styled = styled.h1`
  color: ${(props) => props.theme.dark.color};
`;

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Page />
    </ThemeProvider>
  );
}

export default App;
