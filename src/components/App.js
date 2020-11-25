import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Add a general theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import BackToTop from "../components/ui/BackToTop";
import LandingPage from "../components/LandingPage";
import Services from "../components/Services";
import CustomSoftware from "../components/CustomSoftware";

function App() {
  // useState to change the value when changing the tab in header
  const [tabValue, setTabValue] = useState(0);
  // Indicator to be used when selecting the menu item in header
  const [selectedMenuItemIndex, setselectedMenuItemIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          tabValue={tabValue}
          setTabValue={setTabValue}
          selectedMenuItemIndex={selectedMenuItemIndex}
          setselectedMenuItemIndex={setselectedMenuItemIndex}
        />
        <BackToTop />
        <Switch>
          <Route
            render={(props) => (
              <LandingPage
                {...props}
                setTabValue={setTabValue}
                setselectedMenuItemIndex={setselectedMenuItemIndex}
              />
            )}
            exact
            path="/"
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setTabValue={setTabValue}
                setselectedMenuItemIndex={setselectedMenuItemIndex}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => (
              <CustomSoftware
                {...props}
                setTabValue={setTabValue}
                setselectedMenuItemIndex={setselectedMenuItemIndex}
              />
            )}
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
        <Footer
          tabValue={tabValue}
          setTabValue={setTabValue}
          selectedMenuItemIndex={selectedMenuItemIndex}
          setselectedMenuItemIndex={setselectedMenuItemIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
