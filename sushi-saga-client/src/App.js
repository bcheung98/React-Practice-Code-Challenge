import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {

  state = {
    page: 1,
    sushi: [],
    plates: [],
    money: 100
  }

  componentDidMount() {
    this.getSushi();
  }

  getSushi = () => {
    fetch(`${API}/?_limit=4&_page=${this.state.page}`)
    .then(res => res.json())
    .then(sushi => this.setState({sushi}));
  }

  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    }, this.getSushi());
  }

  addPlate = (price) => {
    console.log(price);
    if (this.state.money - price >= 0) {
          this.setState({
      plates: [
        ...this.state.plates, "plate"
      ],
      money: this.state.money - price
    });
    }
  }

  render() {
    console.log(this.state.page, this.state.sushi);
    return (
      <div className="app">
        <SushiContainer sushiData={this.state.sushi} nextPage={this.nextPage} addPlate={this.addPlate} money={this.state.money} />
        <Table plates={this.state.plates} money={this.state.money}/>
      </div>
    );
  }
}

export default App;