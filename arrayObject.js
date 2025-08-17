function App() {
  let loggedIn = true;
  let name = "Alexa";
  let lastName = "Diaz"
  return (
    <>
      <h1>Hello {loggedIn ? lastName || name : "User"}!</h1>
      {loggedIn && <p>Welcome to the portal</p>}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
