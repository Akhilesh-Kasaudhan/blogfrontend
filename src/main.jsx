import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Blogs from "./Components/Blogs.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import SingleBlog from "./Components/SingleBlog.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        id: "1",
      },
      {
        path: "/blogs",
        element: <Blogs />,
        id: "2",
      },
      {
        path: "/contact",
        element: <Contact />,
        id: "3",
      },
      {
        path: "/about",
        element: <About />,
        id: "4",
      },
      {
        path: "/services",
        element: <Services />,
        id: "5",
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`https://blogbackend-bwxv.onrender.com/blogs/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
