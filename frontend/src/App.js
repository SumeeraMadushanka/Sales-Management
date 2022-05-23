import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import Display from "./components/Display";
import Report from "./components/Report";
import Edit from "./components/Edit";
import Footer from "./components/Footer";

import FinancialDisplay from "./components/Financial/Display";
import FinancialCreate from "./components/Financial/Create";
import FinancialEdit from "./components/Financial/Edit";
import FinancialReport from "./components/Financial/Report";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashbord" element={[<NavBar />, <Dashboard />]} />
          <Route path="/create" element={[<NavBar />, <Create />]} />
          <Route path="/display" element={[<NavBar />, <Display />]} />
          <Route path="/report" element={[<NavBar />, <Report />]} />
          <Route path="/edit/:id" element={[<NavBar />, <Edit />]} />

          <Route
            path="/financialDisplay"
            element={[<NavBar />, <FinancialDisplay />]}
          />
          <Route
            path="/financialCreate"
            element={[<NavBar />, <FinancialCreate />]}
          />
          <Route
            path="/financialEdit/:id"
            element={[<NavBar />, <FinancialEdit />]}
          />
          <Route
            path="/financialReport"
            element={[<NavBar />, <FinancialReport />]}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
