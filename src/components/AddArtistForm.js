import React, { Component } from "react";
import styled from "styled-components";

const Label = styled.label`
  margin-right: 30px;
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
      <section className="add-artist-form">
        <div className="modal-header">
          <h4 className="modal-title">Add New Artist</h4>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="modal-body">
            <table className="add-artist-content">
              <tbody>
                <tr>
                  <td>
                    <Label>Artist Name</Label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="artist_name"
                      placeholder="Artist Name"
                      value={artist_name}
                      onChange={this.handleChange}
                      style={{ color: errorMessage ? "red" : null }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label>Email</Label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label>Website</Label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="website"
                      placeholder="Website"
                      value={website}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {errorMessage && <p>{errorMessage}</p>}
            {/* && means if errorMessage is falsy/ exists run the next item */}
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" type="submit" value="submit">
              Save changes
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddArtistForm;
