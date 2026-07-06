import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = () => (
  <div
    style={{
      border: `10px solid #000`,
      margin: "15px",
      padding: "10px",
      width:"200PX"
    }}
  >
    <GrandChildComponent  />
  </div>
);

export default ChildComponent;
