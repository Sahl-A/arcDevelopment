import React from "react";
// Add a general theme 
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";

import Header from "../components/ui/Header";
import BackToTop from "../components/ui/BackToTop";

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <BackToTop />
      helloo
    </ThemeProvider>
  );
}

export default App;
