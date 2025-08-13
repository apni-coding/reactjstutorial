function App(){
    let arr = [1,2,3,4,5,6]

    let obj = {
        name:"vivek",
        age:20
    }

    return (
        <>
        <h1>Arrays and object in JSX</h1>
        {
            arr.map((num)=> <h2>{num}</h2>)
        }
       
        <h2>{obj.name}</h2>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
