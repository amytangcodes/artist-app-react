import React, { Component } from "react";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      website: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      values: {
        email: this.state.email,
        website: this.state.website
      },
      // onSuccess: () => ( 
      //   console.log("It worked!")
      // )
    });
  };

  render() {
    const { handleEditing } = this.props;
    const { email, website } = this.state;

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <h4>Contact Email:</h4>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={this.handleChange.bind(this)}
            />
            <p>{this.state.email}</p>

            <h4>Website:</h4>
            <input
              type="text"
              name="website"
              placeholder="Edit website"
              value={website}
              onChange={this.handleChange.bind(this)}
            />
            <p>{this.state.website}</p>
          </div>
        </div>

        <div>
          <button className="pull-right" onClick={this.handleSubmit}>
            <span>Save</span>
          </button>
          <button className="pull-left" onClick={handleEditing}>
            <span>Cancel</span>
          </button>
        </div>
      </div>
    );
  }
}

export default EditProfile;
