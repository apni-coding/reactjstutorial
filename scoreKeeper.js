let score = 0;
let wicket = 0;

function App() {
  function scoreOne() {
    score += 1;
    reactNode.render(<App />);
  }

  return (
    <>
      <h1>SCORE KEEPER</h1>
      <h2>
        SCORE: {score}/{wicket}
      </h2>
      <div>
        <button onClick={scoreOne}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
    </>
  );
}
const reactNode = ReactDOM.createRoot(document.getElementById("root"));
reactNode.render(<App />);
