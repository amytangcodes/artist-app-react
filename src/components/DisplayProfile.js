import React from "react";

const DisplayProfile = ({ artist, handleEditing }) => (
  <div>
    <div className="panel panel-default">
      <div className="panel-body">
        <h4>Contact Email:</h4>
        <p>{artist.email}</p>

        <h4>Website:</h4>
        <p>
          <a href={"http://" + artist.website} target="_blank">
            {artist.website}
          </a>
        </p>
      </div>
    </div>
    <button className="pull-right" onClick={handleEditing}>
      <span>Edit Profile</span>
    </button>
  </div>
);

export default DisplayProfile;
