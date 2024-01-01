import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route path="/signin" element={<SignInForm />} />
        {/* Private Routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
