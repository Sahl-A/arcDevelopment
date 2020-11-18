import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Add a general theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import BackToTop from "../components/ui/BackToTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <BackToTop />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>services</div>} />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>customsoftware</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>mobileapps</div>}
          />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>revolution</div>}
          />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
