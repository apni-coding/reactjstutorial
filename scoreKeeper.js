let score = 0;
let wicket = 0;
let ballWiseRes = [];
let hit = ""

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
  ballWiseRes.unshift(hit);
  reactNode.render(<App />);
}

const Form = () => (
  <>
    <form onSubmit={handleSubmit}>
      <input value={hit}/>
      <input />
      <button>Submit</button>
    </form>
  </>
);

function App() {
  function addScore(num) {
      hit = num
      reactNode.render(<App />);
    
  }

  function addWicket() {
      hit = "W"
      reactNode.render(<App />);
    
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
      {
        ballWiseRes.map((res, index)=>(
          <p key={index}>{res}</p>
        ))
      }
    </>
  );
}
const reactNode = ReactDOM.createRoot(document.getElementById("root"));
reactNode.render(<App />);
