import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BingoBoard from './components/BingoBoard.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Landing from "./components/Landing/Landing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "board",
    element: <App />,
  },
  {
    path: "board/:id",
    element: <BingoBoard />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
