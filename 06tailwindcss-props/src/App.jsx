import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let age= 26;
  let myArray= [1,23,45,67];

  let myObj= {
    name: "UB",
    designation: "Software Developer"
  }
  return (
//     <>
//        <h2 classNameNameName='bg-yellow-400 text-red-500 rounded-xl'>Hey We Are Supposed to Test Tailwind CSS!</h2>
//        <div classNameNameName="flex flex-col items-center p-7 rounded-2xl">
//   <div>
//     <img classNameNameName="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/38185865/pexels-photo-38185865.jpeg?_gl=1*12nrfpp*_ga*MjE5NDYwMTI5LjE3NTc5NjY5NDQ.*_ga_8JE65Q40S6*czE3OTExMTcxOTkkbzIkZzEkdDE3OTExMTcyNTQkajUkbDAkaDA." />
//   </div>
//   <div classNameNameName="flex">
//     <span>classNameName Warfare</span>
//     <span>The Anti-Patterns</span>
//     <span classNameNameName="flex">
//       <span>No. 4</span>
//       <span>·</span>
//       <span>2025</span>
//     </span>
//   </div>
// </div>
//     </>
<>
   <Card username="Ujjawal" comapanyName="xyz" age={age} myArray={myArray} myObj={myObj} />
   <Card username="UB" />
   <Card age={age} />
   <Card/>

</>
  )
}

export default App
