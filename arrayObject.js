function App() {
  let cars = ["BMW", "Audi", "Next", "Honda", "Maruti"];

  let student = [
    {
        name:"vivek",
        roleNo:1,
        add:"abc"
    }
  ]

  return (
    <>
      <h1>List of Cars</h1>
      <ul>
        {cars.map((car, idx) => (
          <li key={idx}>{car}</li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
