import React, { useState } from "react";
import Header from "./components/Header";
import StaffList from "./components/StaffList";
import Footer from "./components/Footer";
import "./App.css";
import { STAFFS } from "./shared/staffs";
import { BrowserRouter } from "react-router-dom";
// import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const [staff] = useState(STAFFS);

    return (
      <BrowserRouter>
        <div>
          <Header />
          <StaffList staffs={staff} />
          <Footer />
        </div>
      </BrowserRouter>
    );
}

export default App;
