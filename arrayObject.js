function App() {
  let loggedIn = true;
  return (
    <>
      <h1>Hello {loggedIn ? "Alexa" : "User"}!</h1>
      {loggedIn && <p>Welcome to the portal</p>}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
