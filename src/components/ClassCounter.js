import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increamentCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // increamentCount = ()=>{
  //     this.setState(prevState => {
  //         return  {count : prevState.count + 1}
  //     })
  // }

  render() {
    return (
      <button onClick={this.increamentCount}>
        Clicked {this.state.count} times
      </button>
    );
  }
}

export default ClassCounter;
