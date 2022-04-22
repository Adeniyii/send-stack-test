import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <section className="min-h-screen pt-40">
        <h1 className="text-7xl font-bold">Landing Page Boii</h1>
        <div className="mt-16 flex gap-3">
          <div className="inline-flex rounded shadow">
            <Link
              to="/dashboard"
              className="grid place-content-center px-5 py-3 border border-transparent text-base font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </Link>
          </div>
          <div className="inline-flex rounded shadow">
            <Link
              to="/"
              className="grid place-content-center px-5 py-3 border border-transparent text-base font-medium rounded text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
