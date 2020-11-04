import React from "react";
import Header from "../components/ui/Header";
import BackToTop from "../components/ui/BackToTop";

function App(props) {
  return (
    <div className="App">
      <Header />
      <BackToTop />
      {[...new Array(170)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join("\n")}
      
    </div>
  );
}

export default App;
