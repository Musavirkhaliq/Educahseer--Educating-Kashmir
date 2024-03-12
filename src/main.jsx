import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoSection from "./Pages/VideoSection/VideoSection.jsx";
import HomePage from "./Pages/Homepage/HomePage.jsx";
import LogSIgn from "./Componants/Login-Signup/LogIn.jsx";
import VideoContent from "./Pages/VIdeoPlay/VideoContent.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/src/Componants/Pages/VideoSection/VideoSection.jsx",
    element: <VideoSection />,

  },
  {
    path: "/src/Componants/Pages/Homepage/HomePage.jsx",
    element: <HomePage />,

  },
  {
    path: "/src/Componants/Pages/VideoPlay/VideoContent.jsx",
    element: <VideoContent />,

  },
  {
    path: "/src/Componants/Login-Signup/LogIn.jsx",
    element: <LogSIgn />,

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
