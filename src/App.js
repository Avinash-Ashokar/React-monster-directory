import React, { Component } from "react";

import { CardList } from "./Components/Card-List/card-list.component.jsx";
import { SearchBox } from "./Components/Search-Box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  componentWillUnmount() {

  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> {searchField} </h1>
        <SearchBox
          placeHolder="search Monsters"
          handleChange={(query) =>
            this.setState({ searchField: query.target.value })
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
