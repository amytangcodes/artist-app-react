import React from "react";
import ArtistIndex from "./ArtistIndex";
import ArtistPage from "./components/ArtistPage";
import { BrowserRouter, Route } from "react-router-dom";

// This is a simple component
const App = () => (
  <BrowserRouter>
    <div class="container">
      <div className="row">
        <div className="col-sm-6">
          <Route path="/" component={ArtistIndex} />
        </div>
        <div className="col-sm-6">
          <Route exact path="/artists/:artistId" component={ArtistPage} />
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
