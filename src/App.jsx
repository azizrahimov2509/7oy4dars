import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

// Layout
import Layout from "./components/layout/Layout";

// Pages
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Home from "./pages/Home";

function Redirect({ children }) {
  let user = JSON.parse(localStorage.getItem("user")) ?? false;

  return user ? children : <Navigate to="/login" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/layout",
    element: (
      <Redirect>
        <Layout />
      </Redirect>
    ),
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
