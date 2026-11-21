import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// function App() {
// function CustomApp() {
//   return (
//   //  <DummyCompo />
//   //  <h1>Hello World : Vite</h1>
//   // <div>
//   <>
//     <DummyCompo />
//     <h1>Hello World | vite : Ujjawal</h1>
//     <p>Hey It's A Paragraph Demonstration</p>
//   </>    
//   /* </div> */
//   )
// }

const CustomReactElement = {
    type: 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    content: 'Click On Me To Navigate Google Page'
}

const AnotherElement =(
    <a href='https://google.com' target= '_blank'>Click On Me To Navigate Google Page</a>
)

const myName= 'Ujjawal'

const ReactElem = React.createElement('a', {
    href: 'https://google.com',
    target: '_blank'
}, 'Click On Me To Navigate Google Page', myName)


createRoot(document.getElementById('root')).render(
    // <App />
    // <CustomApp />
    // CustomApp()
    // <CustomReactElement />
    // CustomReactElement()
    // AnotherElement()
    ReactElem
)
