import React from "react";
import "./App.scss";

import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
