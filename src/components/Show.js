import React, { Component } from "react";
import { connect } from "react-redux";
import { SHOW_DATA, FILTER_DATA } from "../redux/actions/types";
import ShowTable from "./Table";
import getPlayerDetails from "../redux/selector";
import { filterData, sortData } from "../redux/actions/actions";
// import {  } from "../redux/actions/actions";

const mapStateToProps = state => {
  return { playerDetails: state.addDataReducer.currentPlayers };
};

class Show extends Component {
  constructor(props) {
    super(props);
    this.countries = [
      "Select Country",
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
      playerDetails: [],
      filter: ""
    };
  }

  handleChange = (event) => {
    this.props.filterData({ country: event.target.value })
  }

  sortRecords = (event, criteria='ascending') => {
    let cri = (criteria === 'ascending') ? 'descending' : 'ascending';
    this.props.sortData({ format: event.target.value, criteria:cri})
  }

  render() {
    return (
      <>
        <select name="country" onChange={this.handleChange}>
          {this.countries.map((country, index) => {
            return index === 0 ? (
              <option defaultValue value={country} key={country}>
                {country}
              </option>
            ) : (
              <option value={country} key={country}>
                {country}
              </option>
            );
          })}
        </select>
        <button value='t20' onClick={this.sortRecords}>T20</button>
        <button value='odi'>ODI</button>
        <button value='test'>TEST</button>
        <ShowTable currentPlayers={this.props.playerDetails || []} />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  { filterData, sortData }
)(Show);
