import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./route/Route";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </ChakraProvider>
  );
}
