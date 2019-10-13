import React, { Component } from "react";
import { connect } from "react-redux";
import { SHOW_DATA, FILTER_DATA } from "../redux/actions/types";
import ShowTable from "./Table";
import getPlayerDetails from "../redux/selector";
import { filterData } from "../redux/actions/actions";

const mapStateToProps = state => {
  console.log(state)
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

  handleChange = event => {
    this.props.filterData({ country: event.target.value })
  }


  render() {
    // console.log(this.props)
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
        {/* <button>Filter</button> */}
        <ShowTable currentPlayers={this.props.playerDetails || []} />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  { filterData }
)(Show);
