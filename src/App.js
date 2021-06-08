import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyles";
import { theme } from "./theme/theme";

const Styled = styled.h1`
  color: ${(props) => props.theme.dark.color};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Styled>hej</Styled>
    </ThemeProvider>
  );
}

export default App;
