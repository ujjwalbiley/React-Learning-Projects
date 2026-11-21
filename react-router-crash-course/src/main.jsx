import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
import {Home, About, Contact, Github} from './components/index.jsx'
import Layout from './hoc/layout.jsx'
import UserComp from './components/UserComp/UserComp.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     // element: <Home />
//     // element: <About />
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       }
//     ]
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<UserComp />} />
      <Route path='github' element={<Github />} />
    </Route>
  ),
  {
    basename: "/React-Router",
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
