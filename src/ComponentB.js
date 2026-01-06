import { Component } from "react";

class ComponentB extends Component{

    constructor(){
        super();
        this.state = {
            name:"vivek"
        }
        console.log("ComponentB Constructor")
    }

    static getDerivedStateFromProps(){
        console.log("ComponentB getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("ComponentB componentDidMount")
         this.setState({
            name:"CA"
        })
    }

    render(){
        console.log("ComponentB Render")
        return(
            <h1>{this.state.name}</h1>
        )
    }
}

export default ComponentB