import React from "react";
import { Route, Switch } from "react-router-dom";
import InvoiceUpload from "./pages/InvoiceUpload";
import BankStatementUpload from "./pages/BankStatementUpload";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={InvoiceUpload} />
        <Route
          path="/upload-bankStatement"
          exact
          component={BankStatementUpload}
        />
        {/* <Route path="/sample" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} />
        <Route path="/something" component={Something} />
        <Route path='/default' render={() => <Redirect to= "/" />} />
        <Route component={NoMatch} /> */}
      </Switch>
    </div>
  );
}
