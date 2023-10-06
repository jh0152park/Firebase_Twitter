import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, DarkMode } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

// Version 1: Using objects
const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: "black",
                color: "white",
            },
            // styles for the `a`
            a: {
                color: "teal.500",
                _hover: {
                    textDecoration: "underline",
                },
            },
        },
    },
});

root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
);
