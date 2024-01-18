import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";

const colors = {
  brand: {
    950: "#ae77f8",
  },
};

const fonts = {
  heading: "Inconsolata",
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
