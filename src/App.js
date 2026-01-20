import React from "react"
import ComponentA from "./ComponentA"
import Timer from "./Timer/TimerOne"

class App extends React.Component{
  constructor(){
    super();

    this.state={
      play: false
    }
  }

  handleClick = ()=>{
    this.setState((prevState) =>({play: !prevState.play}))
  }
  render(){
    return(
      <>
      <Timer timerOne={this.state.play }/>
      <button onClick={this.handleClick}>
        {
          this.state.play ? "Pause" : "Play"
        }
      </button>
      
      </>

    )
  }
}

export default App