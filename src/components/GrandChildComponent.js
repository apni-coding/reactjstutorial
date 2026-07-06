// import {useContext} from 'react'
import { colorContext } from "../context";

const GrandChildComponent = (props) => {
  // const color = useContext(colorContext)

  return (
    <>
      <colorContext.Consumer>
        {(value) => <p style={{ color: value }}>Color: {value}</p>}
      </colorContext.Consumer>
    </>
  );
};

export default GrandChildComponent;
