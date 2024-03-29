"use client";
import { useState } from "react";
import styles from "./page.module.css";
const userVreed = (props) =>{
  return (
    <div className="glo">
      {props.name}
    </div>
  )
}



export default function Home() {

  const [name,setName] = useState("abhik")
  const handleChange = (item) => {
    setName(item)
  };

  // let data = "sam";

  // const handleChange = () => {
  //   data = "kalu"
  // }
  const InnerComponent = () => {
    return (
      
      <h2>Inner Component</h2>
    )
  }

  return (
    <main className={styles.main}>
      <h1>Event {name}</h1>
      <button onClick={() => handleChange("bhaskar")}>Click</button>
      <InnerComponent/>
      <userVreed name={name}/>
    </main>
  );
}


