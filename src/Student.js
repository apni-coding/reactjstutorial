// const { Component } = require("react");

// class Student extends Component{
//     render(){
//         console.log(this.props)
//         const {name, marks} = this.props
//         return(
//             <>
// <h1>Hello, {name}</h1>
// <p>You have secure {marks} %</p>
// <hr />
//             </>
//         )
//     }
// }



function Student(props) {
    const {name = "Student", marks = "N.A."} = props;
    // props.name = "Vivek"
    // console.log(props)
  return (
    <>
      <h1>Hello, {name}</h1>
      <p>You have secure {marks} %</p>
      <hr />
    </>
  );
}
// Student.defaultProps = {
//     name:"Student",
//     marks:"N.A."
// }
export default Student;
