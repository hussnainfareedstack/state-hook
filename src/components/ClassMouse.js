import React, { Component } from "react";

class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e) => {
    console.log("mouse event");
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    console.log("EventListener mousemove added");
    window.addEventListener("mousemove", this.logMousePosition);
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePosition);
  }
  render() {
    return (
      <div>
        X: {this.state.x} <br></br> Y: {this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
