import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Detectors, Heatmaps, Integrations, Blog, LoginPage, DDNS } from './pages';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import './index.css';

const router = createBrowserRouter([
    {
        path: "/react-real-estate",
        element: <App />,
    },
    {
        path: "Detectors",
        element: <Detectors />,
    },
    {
        path: "Heatmaps",
        element: <Heatmaps />,
    },
    {
        path: "Integrations",
        element: <Integrations />,
    },
    {
        path: "Blog",
        element: <Blog />,
    },
    {
        path: "LoginPage",
        element: <LoginPage />,
    },
    {
        path: "DDNS",
        element: <DDNS />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);