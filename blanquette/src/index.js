import React from 'react';
 import ReactDOM from 'react-dom/client';
 import './index.css';
// import App from './App';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import EventListScreen from './screens/EventListScreen';
import GalleryScreen from './screens/GalleryScreen';
import AdminScreen from './screens/AdminScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/>,
  },
  {
    path: "/about",
    element: <AboutScreen/>,
  },
  {
    path: "/events",
    element: <EventListScreen/>,
  },
  {
    path: "/gallery",
    element: <GalleryScreen/>,
  },
  {
    path: "Admin",
    element: <AdminScreen/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
