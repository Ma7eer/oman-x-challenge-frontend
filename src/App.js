import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import InvoiceUpload from "./pages/InvoiceUpload";
import BankStatementUpload from "./pages/BankStatementUpload";
import Invoices from "./pages/Invoices";
import BankStatements from "./pages/BankStatement";

import Logo from "./assets/images/tadqeeq logo small2.png";
import LogoSideBar from "./assets/images/tadqeeq logo1.jpeg";

let Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div className="container">
        <a class="navbar-brand" href="#">
          <img
            src={Logo}
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />{" "}
          TADQEEQ
        </a>
      </div>
    </nav>
  );
};

const SideBar = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "20%",
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0,
        backgroundColor: "#f8f9fa",
        overflowX: "hidden",
        paddingTop: "10%",
      }}
    >
      <div className="bg-light border-right" id="sidebar-wrapper">
        <img
          src={LogoSideBar}
          alt="logo"
          width="150px"
          style={{
            marginBottom: "30px",
            borderRadius: "50%",
            boxShadow: "1px 1px 1px 0px rgba(222,219,222,1)",
          }}
        />
        <div
          className="list-group list-group-flush"
          style={{ textAlign: "left" }}
        >
          <Link
            to="/"
            className="list-group-item list-group-item-action bg-light"
          >
            Home
          </Link>
          <Link
            to="invoices"
            className="list-group-item list-group-item-action bg-light"
          >
            Invoices
          </Link>
          <Link
            to="bank-statements"
            className="list-group-item list-group-item-action bg-light"
          >
            Bank Statements
          </Link>
          <Link
            to="upload-invoice"
            className="list-group-item list-group-item-action bg-light"
          >
            Upload Invoice
          </Link>
          <Link
            to="upload-bank-statement"
            className="list-group-item list-group-item-action bg-light"
          >
            Upload Bank Statement
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <div style={{ float: "right", width: "80%" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload-invoice" component={InvoiceUpload} />
          <Route
            path="/upload-bank-statement"
            component={BankStatementUpload}
          />
          <Route path="/bank-statements" component={BankStatements} />
          <Route path="/invoices" component={Invoices} />
        </Switch>
      </div>
    </div>
  );
}
