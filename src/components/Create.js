import React, { Component } from "react";
// import { FormControl, InputLabel, Input, Select, Menu, MenuItem, Button } from '@material-ui/core'
// import { AddDetails } from '../redux/actions/actions';
import { ADD_DATA } from "../redux/actions/types";
import { connect } from "react-redux";
import { addDetails } from "../redux/actions/actions";

class Create extends Component {
  constructor(props) {
    super(props);
    this.countries = [
      'Select Country',
      "India",
      "Australia",
      "South Africa",
      "West indies",
      "Sri Lanka",
      "New Zealand",
      "England",
      "Pakistan",
      "Bangladesh",
      "Nepal"
    ];
    this.state = {
      name: "",
      country: "",
      t20: 0,
      odi: 0,
      test: 0
    };
  }

  submit = event => {
    event.preventDefault();
    console.log("submitting", this.state);
    this.props.addDetails(this.state);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state, event.target.name, event.target.value);
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          ></input>
        </label>
        <br></br>
        <select name="country" onChange={this.handleChange}>
          {this.countries.map((country, index) => {
              return (
                (index === 0) ? <option defaultValue value={country} key={country}>{country}</option> : <option value={country} key={country}>{country}</option>
              );
          })}
        </select>
        <label>
          T20 score:
          <input
            type="number"
            value={this.state.t20}
            onChange={this.handleChange}
            name="t20"
          ></input>
        </label>
        <label>
          ODI score:
          <input
            type="number"
            value={this.state.odi}
            onChange={this.handleChange}
            name="odi"
          ></input>
        </label>
        <label>
          test score:
          <input
            type="number"
            value={this.state.test}
            onChange={this.handleChange}
            name="test"
          ></input>
        </label>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default connect(
  null,
  { addDetails }
)(Create);
