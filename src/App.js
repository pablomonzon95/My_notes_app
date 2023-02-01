
import './App.css';
import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { ErrorPage } from './views/ErrorPage';
import {MainPage} from './views/MainPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      errorElement: <ErrorPage />,
    },])

    return <div>
    
      <RouterProvider router={router} />
    
  </div>
}

export default App;
