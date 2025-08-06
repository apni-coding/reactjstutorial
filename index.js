

function App(){
  var name = "vivek";
  var age = 20
  let demo = null;


  return (
    <>
    <h1>Hello {name}!</h1>
    <p>Your age is {age}</p>
    <h1>{demo} is here</h1>
    </>
  )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
