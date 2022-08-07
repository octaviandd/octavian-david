import React from "react";
import ContactForm from "./ContactForm.js";
import Header from "./Header.js";
import Timeline from "./Timeline";
import Tools from "./Tools.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7Czluv2wdnhkjw3p2btADERm_-ZAsUng",
  authDomain: "personal-project-e1202.firebaseapp.com",
  projectId: "personal-project-e1202",
  storageBucket: "personal-project-e1202.appspot.com",
  messagingSenderId: "1035152969756",
  appId: "1:1035152969756:web:cb8fbb1c269639bdef8fd9",
  measurementId: "G-93LPZLCRT4",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

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
