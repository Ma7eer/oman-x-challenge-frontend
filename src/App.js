import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import InvoiceUpload from "./pages/InvoiceUpload";
import BankStatementUpload from "./pages/BankStatementUpload";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upload-invoice" component={InvoiceUpload} />
        <Route
          path="/upload-bank-statement"
          exact
          component={BankStatementUpload}
        />
      </Switch>
    </div>
  );
}
