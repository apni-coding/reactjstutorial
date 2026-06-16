import React from "react";
import { useParams } from "react-router";

export default function ItemsDetails() {
  const param = useParams()
  console.log(param)
  return (
    <>
    <main>
      <h1>Items Details</h1>
     
    </main>
     <h2>{param.id}</h2>
    </>
  );
}
