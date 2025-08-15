function App() {
  let students = [
    { id:1, name: "vivek", age: 10, marks: 35 },
    { id:2, name: "raj", age: 12, marks: 55 },
    {id:3, name: "amit", age: 11, marks: 75 },
    { id:4, name: "neha", age: 10, marks: 90 },
  ];

  return (
    <>
      <h1>Displaying Student's Information</h1>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>MARKS</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((item)=>(
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.marks}</td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
