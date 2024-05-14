import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MasterPrice from './pages/MasterPrice.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CustomPrice from './pages/CustomPrice.jsx';
import Calender from './pages/Calender.jsx';
import Reports from './pages/Reports.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <MasterPrice />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/custom-price",
        element: <CustomPrice/>,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
