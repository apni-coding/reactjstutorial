let score = 0;
let wicket = 0;
let ballWiseRes = [];

const Result = () => (
  <>
    {ballWiseRes.map((res, index) => (
      <React.Fragment key={index}>
        {index % 6 === 0 ? <br /> : null}
        <span>{res === 0 ? <strong>.</strong> : res} &nbsp;&nbsp;&nbsp;</span>
      </React.Fragment>
    ))}
  </>
);

function handleSubmit(event) {
  event.preventDefault();
}

const Form = () => (
  <>
    <form onSubmit={handleSubmit}>
      <input />
      <input />
      <button>Submit</button>
    </form>
  </>
);

function App() {
  function addScore(num) {
    if (wicket < 10) {
      score += num;
      ballWiseRes.push(num);
      console.log(ballWiseRes);
      reactNode.render(<App />);
    }
  }

  function addWicket() {
    if (wicket < 10) {
      wicket += 1;
      ballWiseRes.push("W");
      console.log(ballWiseRes);
      reactNode.render(<App />);
    }
  }

  return (
    <>
      <h1>SCORE KEEPER</h1>
      <h2>
        SCORE: {score}/{wicket}
      </h2>
      <div>
        <button onClick={() => addScore(0)}>0</button>
        <button onClick={() => addScore(1)}>1</button>
        <button onClick={() => addScore(2)}>2</button>
        <button onClick={() => addScore(3)}>3</button>
        <button onClick={() => addScore(4)}>4</button>
        <button onClick={() => addScore(5)}>5</button>
        <button onClick={() => addScore(6)}>6</button>
        <button onClick={addWicket}>Wicket</button>
      </div>
      {/* <Result /> */}
      <br />
      <Form />
      <hr />
    </>
  );
}
const reactNode = ReactDOM.createRoot(document.getElementById("root"));
reactNode.render(<App />);
