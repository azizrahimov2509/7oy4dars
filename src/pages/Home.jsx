import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div>
        <h1 className="text-4xl mb-4">Welcome to My App</h1>
        <Link to="/" className="text-blue-500">
          Go to Register
        </Link>
      </div>
    </div>
  );
}
