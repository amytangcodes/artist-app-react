import React from "react";
import ArtistIndex from "./ArtistIndex";
import ArtistPage from "./components/ArtistPage";
import { BrowserRouter, Route } from "react-router-dom";

// This is a simple component
const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ArtistIndex} />
      <Route exact path="/artists/:artistId" component={ArtistPage} />
    </div>
  </BrowserRouter>
);

export default App;
