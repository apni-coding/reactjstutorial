import { useState, useEffect } from "react";

export default function Input() {
  const [name, setName] = useState("Harray")
  const [lastName, setLastName] = useState('')

  //CDM CDU
  useEffect(()=>{
    document.title = name + " " + lastName
  }, [lastName, name])
  /*
  No Dep -> Every time func call
  []-> One time render
  [lastName] -> whenever last name change detect
  [lastName, name, xyz] ->  whenever last lastName, name, xyz change detect

  */
  return (
    <>
      <div className="section">
        <Row label="Name">
          <input className="input" value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </Row>
        <Row label="Last Name">
          <input className="input" value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
          
          />
        </Row>
      </div>

      <h2>Hello,{name} {lastName} </h2>
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>
        {label}
        <br />
      </lable>
      {props.children}
      <hr />
    </>
  );
}
