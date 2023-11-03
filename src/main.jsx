import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Statistics from './Component/Statistics/Statistics.jsx';
import Applied from './Component/Applied Jobs/Applied.jsx';
import Blogs from './Component/Blogs/Blogs.jsx';
import JobDetails from './Component/JobDetails/JobDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistic',
        element: <Statistics></Statistics>
      },{
        path: '/applied',
        element: <Applied></Applied>,
        loader: ()=> fetch('../jobs.json')
      },{
        path: '/blog',
        element: <Blogs></Blogs>
      },{
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('../jobs.json')
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
