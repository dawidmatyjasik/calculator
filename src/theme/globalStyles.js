import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spartan', sans-serif;
}
body{
    width: 100vw;
    height: 100vh;
}
#root{
    height: 100%;
    background-color: ${(props) => props.theme.background.main};
}
`;
