import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MasterPrice from './pages/MasterPrice.jsx';
import OneWay from './pages/OneWay.jsx';
import MultiCity from './pages/MultiCity.jsx';
import RoundTrip from './pages/RoundTrip.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <MasterPrice />,
        children:[
          {
            path:"",
            element:<OneWay/>
          },
          {
            path:"/multi-city",
            element:<MultiCity/>
          },
          {
            path:"/round-trip",
            element:<RoundTrip/>
          }
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
