import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-hero-pattern bg-no-repeat bg-center bg-cover">
      <div>
        <h1 className="text-4xl mb-4">Welcome to My App</h1>
      </div>
    </div>
  );
}
