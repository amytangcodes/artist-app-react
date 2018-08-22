import React from "react";

const DisplayProfile = ({ artist, toggleEditing }) => (
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
    <div className="button-container">
      <button 
        className="pull-right" 
        onClick={toggleEditing}
      >
        <span>Edit Profile</span>
      </button>
    </div>
  </div>
);

export default DisplayProfile;
