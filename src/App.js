import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";


export default function App({ name, age = 20 }) {
  const greeting = (
    <h1 className="greet">
      Hello {name}, My age is: {age}
    </h1>
  );

  const [count, setCount]=useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer çalışır');
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{greeting}</p>
          <span className="counter">{count}</span>
          <button className="add-count" onClick={()=> setCount(count + 1)}>Incfrement</button>
          <button className="add-count" onClick={()=> setCount(count - 1)}>Decrement</button>
        </header>
      </div>
    </>
  );
}
