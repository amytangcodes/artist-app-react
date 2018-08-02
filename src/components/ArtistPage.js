import React from "react";
import { Link } from "react-router-dom";

const ArtistPage = ({ artist }) => (
  <div className="main-content">
    <h2>{artist.artist_name}</h2>

    <Link to="/">
      Home
    </Link>
  </div>
)

// Above is the same as return within curly braces:
// const ArtistPage = () => {
//   return (
//     <div className="main-content">
//       <h2>Artist Page</h2>
//     </div>
//   );
// };

export default ArtistPage;
