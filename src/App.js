import React from "react"
import ComponentA from "./ComponentA"
import Timer from "./Timer/TimerOne"

class App extends React.Component{

  render(){
    return(
      <>
      {/* <ComponentA /> */}
      <Timer />
      </>
    )
  }
}

export default App