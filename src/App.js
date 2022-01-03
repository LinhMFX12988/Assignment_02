import React, { useState } from "react";
import Header from "./components/Header";
import StaffList from "./components/StaffList";
import StaffDetail from "./components/StaffDetail";
import Department from "./components/Department";
import Salary from "./components/Salary";
import Footer from "./components/Footer";
import "./App.css";
import { STAFFS, DEPARTMENTS } from "./shared/staffs";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const [staff] = useState(STAFFS);
  const [department] = useState(DEPARTMENTS);

  const renderDetailStaff = ({ match }) =>
      <StaffDetail
        staffs={staff.filter((staffs) =>
          staffs.id === parseInt(match.params.id, 10))[0]}
      />

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/staffs" component={() => <StaffList staffs={staff} />} />
          <Route path="/staffs/:id" component={renderDetailStaff} />
          <Route path="/department" component={() => <Department departments={department} />} />
          <Route path="/salary" component={() => <Salary salarys={staff} />} />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
