import React from "react";
import { Route } from "react-router-dom";

const ArtistPage = ({ artist }) => (
  <div className="main-content">
    <div className="page-header">
    <h1>{artist.artist_name}</h1>
      <button>Edit</button>
    </div>
    <div className="row">
      <div className="col-xs-12">
    <p>{artist.email}</p>
    <p>
        <a href={"http://" + artist.website} target="_blank">
        {artist.website}
        </a>
    </p>
      </div>
    </div>

  </div>
);

// Above is the same as return within curly braces:
// const ArtistPage = () => {
//   return (
//     <div className="main-content">
//       <h2>Artist Page</h2>
//     </div>
//   );
// };

export default ArtistPage;
