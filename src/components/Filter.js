import React, { Component } from 'react';

const countries = [
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
export const Filter = () => {
    return(
        <select name="country" onChange={this.handleChange}>
          {this.countries.map((country, index) => {
              return (
                (index === 0) ? <option defaultValue value={country} key={country}>{country}</option> : <option value={country} key={country}>{country}</option>
              );
          })}
        </select>
    )
}