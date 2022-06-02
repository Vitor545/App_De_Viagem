import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Main from "./components/Main"
import ScrollUp from "./components/ScrollUp";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
      <ScrollUp />
    </React.Fragment>
  );
}

export default App;
