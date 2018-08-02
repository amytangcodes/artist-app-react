import React, { Component } from "react";

class AddArtistForm extends Component {
  state = { artist_name: "", errorMessage: null };

  handleChange = event => {
    this.setState({ artist_name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      values: {
        artist_name: this.state.artist_name
      },
      onSuccess: () => this.setState({ artist_name: "", errorMessage: null }),
      onError: message => this.setState({ errorMessage: message })
    });
  };

  render() {
    const { artist_name, errorMessage } = this.state;
    console.log(this.state);
    return (
      <div class="jumbotron">
        <form onSubmit={this.handleSubmit}>
          <label>Artist Name</label>
          <input
            type="text"
            name="artist_name"
            placeholder="Artist Name"
            value={artist_name}
            onChange={this.handleChange}
            style={{ color: errorMessage ? "red" : null }}
          />
        </form>
        {errorMessage && <p>{errorMessage}</p>}  
        {/* && means if errorMessage is falsy run the next item */}
      </div>
    );
  }
}

export default AddArtistForm;
