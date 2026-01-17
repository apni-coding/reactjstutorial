import React from "react"
import ComponentA from "./ComponentA"
import Timer from "./Timer/TimerOne"

class App extends React.Component{
  constructor(){
    super();

    this.state={
      mount: true
    }
  }

  handleMount = ()=>{
    this.setState((prevState) =>({mount: !prevState.mount}))
  }
  render(){
    return(
      <>
      <button onClick={this.handleMount}>
        {
          this.state.mount ? "Un-Mount" : "MOUNT"
        }
      </button>
      {
        this.state.mount ? <Timer /> : null
      }
      </>
    )
  }
}

export default App