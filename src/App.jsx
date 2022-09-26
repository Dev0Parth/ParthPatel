import React from "react";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Notes from "./components/Notes/Notes";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Services />
      <Experience />
      <Works />
      <Notes />
      <Footer />
    </>
  );
};

export default App;
