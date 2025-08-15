function StudentPage() {
  let students = [
    { id: 1, name: "vivek", age: 10, marks: 35 },
    { id: 2, name: "raj", age: 12, marks: 55 },
    { id: 3, name: "amit", age: 11, marks: 75 },
    { id: 4, name: "neha", age: 10, marks: 90 },
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
          {students.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function CarPage() {
  let cars = [
    {
      id: 1,
      name: "BMW",
      img: "https://cdn-icons-png.flaticon.com/128/741/741407.png",
      avg: "15 km/l",
    },
    {
      id: 2,
      name: "Audi",
      img: "https://cdn-icons-png.flaticon.com/128/741/741407.png",
      avg: "14 km/l",
    },
    {
      id: 3,
      name: "Honda",
      img: "https://cdn-icons-png.flaticon.com/128/741/741407.png",
      avg: "18 km/l",
    },
  ];

  return (
    <>
      <h1>Car Information</h1>
      <table>
        <thead>
          <tr>
            <th>Car Image</th>
            <th>Car Name</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>
                <img src={car.img} alt={car.name} />
              </td>
              <td>{car.name}</td>
              <td>{car.avg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function App() {
  let showCars = false;
  if(showCars){
   return <CarPage />
  }
  return (
    <>
      <StudentPage />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
