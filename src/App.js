import React, { Component } from "react";
const count = 4

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 4
        }
    }
    isEven(val) {
        return val % 2 === 0 ? "Even" : "Odd";
    }
  render = () =>
      <h4 className="bg-primary text-white text-center p-2 m-1">
          Number of things: {this.isEven(this.state.count)}
      </h4>
}