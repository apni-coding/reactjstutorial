
function App() {
  let loggedIn = false;
  return (
    <>
      <h1>Hello {loggedIn ? "User" : "Alexa" }!</h1>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
