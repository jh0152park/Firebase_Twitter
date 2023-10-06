import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    background-color: black;
    /* color: whitesmoke; */
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

root.render(
    <>
        <GlobalStyle />
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </>
);
