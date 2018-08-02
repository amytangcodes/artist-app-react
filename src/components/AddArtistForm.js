import React, { Component } from 'react';


class AddArtistForm extends Component {
  state = { artist_name: "" };

  handleChange = event => {
    this.setState({ artist_name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({artist_name: this.state.artist_name});
  }

  render() {
    const { artist_name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Artist Name</label>
        <input
          type="text"
          name="artist_name"
          placeholder="Artist Name"
          value={artist_name}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default AddArtistForm;