import { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component{

    constructor(){
        super();
        this.state = {
            name:"vivek",
            data:[]
        }
        console.log("ComponentA Constructor")
    }

    static getDerivedStateFromProps(){
        console.log("ComponentA getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("ComponentA componentDidMount")
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({data}))
    }

    render(){
        console.log("ComponentA Render")
        console.log(this.state.data)
        return(
            <>
            <h1>{this.state.name}</h1>
            <ul>
            {
                this.state.data.map((d)=>{
                    return (
                        <li key={d.id}>{d.name}</li>
                    )
                })
            }
            </ul>
            <ComponentB />
            </>
        )
    }
}

export default ComponentA