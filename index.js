function Name(){
  return (
    <p>JSX is JavaScript XML</p>
  )
}

const App = () => (
  <>
    <h2 className="head">Hello JSX!</h2>
    <p>This is created using JSX</p>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<><App />  </>);
