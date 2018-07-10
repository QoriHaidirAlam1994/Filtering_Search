import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Galery from "./galery";
import App from "./App";
import Header from "./header";
import Footer from "./footer";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={PageHome} />
      <Route path="/galery" component={pageGalery} />
    </div>
  </Router>
);

const PageHome = () => (
  <div>
    <Header />
    <App />
    <Footer />
  </div>
);

const pageGalery = () => (
  <div>
    <Header />
    <Galery />
    <Footer />
  </div>
);

export default Routes;
