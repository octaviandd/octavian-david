/** @format */

import React from "react";
import ContactForm from "./ContactForm.js";
import Header from "./Header.js";
import Timeline from "./Timeline";
import Tools from "./Tools.js";

const App = () => {
  return (
    <div className="p-[30px] grid-cols-1 lg:grid-cols-2 grid gap-3 h-full relative">
      <div className="md:fixed">
        <Header></Header>
        <Tools></Tools>
        <ContactForm></ContactForm>
      </div>
      <div className="md:absolute md:right-[400px] relative hidden lg:block">
        <Timeline></Timeline>
      </div>
    </div>
  );
};

export default App;
