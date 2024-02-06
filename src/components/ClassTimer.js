import React, { Component } from 'react'

class ClassTimer extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       timer:0
    }
  }
  interval
  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState(prevState => ({timer: prevState.timer + 1}))
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <h3>Timer - {this.state.timer}</h3>
        <button onClick={()=> clearInterval(this.interval)}>Clear Interval timer</button>
      </div>
    )
  }
}

export default ClassTimer