/** JAVASCRIPT */
const heading = document.createElement("h2");
heading.textContent = "Hello World";
heading.className = "header";

// console.log("JavaScript Element", heading)

// document.getElementById("root").append(heading);


/** REACT  with JS*/
// const reactHeading = React.createElement("h2", {className : "head", id : "heading", children: "Hello React!"});

/* REACT with JSX  */
const jsxHeading = (<h2 className="head">Hello JSX!</h2>);

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);


// console.log("React Element", reactHeading)

/*
1. type of element (h1, h2, div, span)
2. object -> class, id, attributes //null
3. text inside the element
*/
