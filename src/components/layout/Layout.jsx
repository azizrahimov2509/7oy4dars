import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  useEffect(() => {
    localStorage.setItem("user", "false");
  }, []);
  return (
    <>
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container max-w-screen-lg mx-auto flex justify-between items-center ">
          <h1 className="text-2xl font-bold">My App</h1>
          <nav>
            <Link
              to="/layout/home"
              className="px-4 py-2 hover:bg-blue-700 bg-blue-950 mx-2 rounded"
            >
              Home
            </Link>

            <Link
              to="/"
              className="px-4 py-2 bg-blue-950 hover:bg-blue-700 rounded"
            >
              LogOut
            </Link>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My App. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
