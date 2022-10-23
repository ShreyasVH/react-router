import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "./containers/home";
import Page1 from "./containers/page1";
import Page2 from "./containers/page2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/page1",
        element: <Page1 />,
    },
    {
        path: "/page2",
        element: <Page2 />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
