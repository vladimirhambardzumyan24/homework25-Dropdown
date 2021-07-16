import React from "react";
import "./CountriesData.css";
import arrow from "../arrow.png";
import Countries from "./Countries";

class CountriesData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesData: [],
      searchCountriesData: [],
      isDunArrow: true,
    };
  }

  async componentDidMount() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    this.setState({ countriesData: data });
  }

  handleSearchChange = (event) => {
    let searchValue = event.target.value.toLowerCase();
    let searchCounterArr = this.state.countriesData
      .filter((counter) => counter.name.toLowerCase().search(searchValue) > -1)
      .sort((a, b) => {
        return (
          a.name.toLowerCase().search(searchValue) -
          b.name.toLowerCase().search(searchValue)
        );
      });
    this.setState({ searchCountriesData: searchCounterArr });
    if (!searchValue) {
      this.setState({ searchCountriesData: [] });
    }
  };

  handleArrow = () => {
    if (this.state.isDunArrow) {
      this.setState({
        searchCountriesData: this.state.countriesData,
        isDunArrow: false,
      });
    } else {
      this.setState({ searchCountriesData: [], isDunArrow: true });
    }
  };

  render() {
    return (
      <div className="container">
        <input className="search" onChange={this.handleSearchChange}></input>
        <div className="dropdown">
          <img
            className="arrow-img"
            onClick={this.handleArrow}
            src={arrow}
            alt="Arrow"
          ></img>
        </div>
        <Countries searchCountriesData={this.state.searchCountriesData} />
      </div>
    );
  }
}

export default CountriesData;
