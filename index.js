/** JAVASCRIPT */
const heading = document.createElement("h2");
heading.textContent = "Hello World";
heading.className = "header";

// console.log("JavaScript Element", heading)

// document.getElementById("root").append(heading);

/** REACT  with JS*/
// const reactHeading = React.createElement("h2", {className : "head", id : "heading", children: "Hello React!"});

/* REACT with JSX  */
const jsxHeading = (
  <>
    <h2 className="head">Hello JSX!</h2>
    <p>This is created using JSX</p>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
