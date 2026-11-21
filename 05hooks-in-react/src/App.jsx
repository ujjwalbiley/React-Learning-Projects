import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  
  // let counter = 10;

  const addValue = () => {
    // console.log("Value Incremented", Math.random());
    // counter++;
    // counter += 1;
    // counter = counter + 1;
    setCounter(counter+1);
    console.log("Counter :",counter);
  }

  const subtractValue =() => {
    setCounter(counter-1);
    console.log("Counter :", counter);
  }

  return (
    <>
       <h1>Hey Everyone, We Are Here To Understand Hooks In React.</h1>
        <h3>Counter : {counter}</h3>
       {/* <h3>Counter : {counter}</h3>
       <h3>Counter : {counter}</h3>
       <h3>Counter : {counter}</h3>

       <p>Counter : {counter}</p> */}

       <button onClick={addValue}>Increment 1</button>
       <button onClick={subtractValue}>Decrement 1</button>
    </>
  )
}

export default App
