const { Component } = require("react");

class Student extends Component{
    render(){
        console.log(this.props)
        const {name, marks} = this.props
        return(
            <>
                <h1>Hello, {name}</h1>
                <p>You have secure {marks} %</p>
                <hr />
            </>
        )
    }
}

export default Student