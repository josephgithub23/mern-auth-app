import React from "react";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">About</h1>
      <p className="text-slate-800 mb-4">
        This is a full- stack web application built with the MERN (MongoDB,
        Express, React, Node.js) stack. It include authentication features that
        allow users to sign up, log in, and log out, image upload, and provides
        access to protect routes only for authenticated users.
      </p>
      <p className="text-slate-800 mb-4">
        The front-end of the application is built with react and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using JSON web Tokens (JWT).
      </p>
      <p className="font-bold font-2xl">Developer: Joseph Tobi Olatilo</p>
    </div>
  );
}
