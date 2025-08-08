

function App(){
  var name = "vivek";
  var age = 20
  let demo = null;
  let undef;
  const bool = true

  function sum(){
    let a = 10+5;
    return a;
  }

  function a (){
    return "abc";
    let c = 20;
    
  }

  const heading = <h2>JSX Expression</h2>
  return (
    <>
    <h1>JavaScript inside JSX</h1>
    {
      heading
    }
    <p>String: {name}</p>
    <p>Number: {age}</p>
    <p>Null Value: {demo}</p>
    <p>Undefined Value: {undef}</p>
    <p>Boolean Value: {bool}</p>
    <p>Calling a function: {sum()}</p>
    </>
  )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
