import React, { Component } from 'react'

class ClassCondEffectCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name: ''
      }
    }

    componentDidMount(){
        document.title = `You clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log("updating document title.")
            document.title = `You clicked ${this.state.count} times`
        }
    }

  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={e => this.setState({name: e.target.value})}></input>
        <button onClick={()=> this.setState({count: this.state.count + 1})}>clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default ClassCondEffectCounter