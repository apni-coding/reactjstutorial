import { Component } from "react";

class ComponentA extends Component{

    constructor(){
        super();
        this.state = {
            name:"vivek"
        }
        console.log("ComponentA Constructor")
    }

    static getDerivedStateFromProps(){
        console.log("ComponentA getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("ComponentA componentDidMount")
    }

    render(){
        console.log("ComponentA Render")
        return(
            <h1>{this.state.name}</h1>
        )
    }
}

export default ComponentA