import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  // position: fixed;
  // top: 0;
  // bottom: 0;
  // right: 0;
  // left: 0;
  // padding-top: 30%;
  // padding-left: 70%;
  // background: rgba(218, 85, 186, 0.1);
`
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.artist.id,
      email: props.artist.email,
      website: props.artist.website,
      errorMessage: null
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      values: {
        id: this.state.id,
        email: this.state.email,
        website: this.state.website,
      },
      onError: message => this.setState({ errorMessage: message })
    });
  };

  render() {
    const { toggleEditing } = this.props;
    const { email, website, errorMessage } = this.state;
    console.log(this.state.errorMessage);

    return (
      <Container onClick={this.handleClick}>
        <div className="panel panel-default panel-modal">
          <div className="panel-body">
            <h4>Contact Email:</h4>
            <input
              type="text"
              name="email"
              placeholder="Edit Email"
              value={email}
              onChange={this.handleChange.bind(this)}
            />

            {errorMessage && <p>{this.state.errorMessage}</p>}

            <h4>Website:</h4>
            <input
              type="text"
              name="website"
              placeholder="Edit Website"
              value={website}
              onChange={this.handleChange.bind(this)}
            />
          </div>
        </div>

        <div className="button-container">
          <button className="pull-right" onClick={this.handleSubmit}>
            <span>Save</span>
          </button>
          <button className="pull-left" onClick={toggleEditing}>
            <span>Cancel</span>
          </button>
        </div>
      </Container>
    );
  }
}

export default EditProfile;
