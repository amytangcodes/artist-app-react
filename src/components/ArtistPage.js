import React from "react";
import { Link } from "react-router-dom";

const ArtistPage = ({ artist }) => (
  <div className="main-content">
    <h1>{artist.artist_name}</h1>
    <p>{artist.email}</p>
    <p>
      <Link to={() => (window.location.href = artist.website)}>
        {artist.website}
      </Link>
    </p>

    <div>
      {/* <Link to="/edit">Edit</Link> */}
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
