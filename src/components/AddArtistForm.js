import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  margin: 20px;
  padding: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

class AddArtistForm extends Component {
  state = {
    artist_name: "",
    errorMessage: null,
    email: "",
    website: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      values: {
        artist_name: this.state.artist_name,
        email: this.state.email,
        website: this.state.website
      },
      onSuccess: () =>
        this.setState({
          artist_name: "",
          errorMessage: null,
          email: "",
          website: ""
        }),
      onError: message => this.setState({ errorMessage: message })
    });
  };

  render() {
    const { artist_name, errorMessage, email, website } = this.state;

    return (
      <Container>
        <form onSubmit={this.handleSubmit} >
          <p>
            <Label>Artist Name</Label>
            <input
              type="text"
              name="artist_name"
              placeholder="Artist Name"
              value={artist_name}
              onChange={this.handleChange}
              style={{ color: errorMessage ? "red" : null }}
            />
          </p>
          <p>
            <Label>Email</Label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <Label>Website</Label>
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={website}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input type="submit" value="submit" /> 
          </p>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        {/* && means if errorMessage is falsy/ exists run the next item */}
      </Container>
    );
  }
}

export default AddArtistForm;
