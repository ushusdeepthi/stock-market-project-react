import React from "react";
import { Switch, Route } from "react-router-dom";
import CryptoPage from "./pages/CryptoPage";
import CurrenciesPage from "./pages/CurrenciesPage";
import IndexesPage from "./pages/IndexesPage";
import LandingPage from "./pages/LandingPage";
import MarketsPage from "./pages/MarketsPage";
import CryptoDetailPage from "./pages/CryptoDetailPage";
import CurrenciesDetailPage from "./pages/CurrenciesDetailPage";
import MarketsDetailPage from "./pages/MarketsDetailPage";
import CompanyPage from "./pages/CompanyPage.jsx";

import IndexesDetailPage from "./pages/IndexesDetailPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Switch>
          <Route path="/currencies/:id" component={CurrenciesDetailPage} />
          <Route path="/crypto/:id" component={CryptoDetailPage} />
          <Route path="/indexes/:id" component={IndexesDetailPage} />
          <Route path="/markets/:id/:company" component={CompanyPage} />
          <Route path="/markets/:id" component={MarketsDetailPage} />
          <Route path="/currencies">
            <CurrenciesPage />
          </Route>

          <Route path="/crypto">
            <CryptoPage />
          </Route>
          <Route path="/indexes">
            <IndexesPage />
          </Route>
          <Route path="/markets">
            <MarketsPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
