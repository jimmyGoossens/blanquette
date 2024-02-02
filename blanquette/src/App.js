
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import EventListScreen from './screens/EventListScreen';


import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AdminScreen from './screens/AdminScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/>,
  },
  {
    path: "about",
    element: <AboutScreen/>,
  },
  {
    path: "Events",
    element: <EventListScreen/>,
  },
  {
    path: "Admin",
    element: <AdminScreen/>,
  },
]);

function App() {
  return (

  );
}

export default App;
