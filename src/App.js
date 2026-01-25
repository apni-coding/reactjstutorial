import React from "react"
import ComponentA from "./ComponentA"
import Timer from "./Timer/TimerOne"
import ErrorBoundary from "./ErrorBoundary";
import ComponentB from "./ComponentB";

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
      <ErrorBoundary>
        <ComponentA />
      </ErrorBoundary>

       <ErrorBoundary>
        <ComponentB />
      </ErrorBoundary>
      </>

    )
  }
}

export default App