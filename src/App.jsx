import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./components/Authentication";

function App() {
return (
<AuthProvider>
<Router>
<div className="app">
<Routes>
<Route path="/" element={<SignUp />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/login" element={<Login />} />
<Route path="*" element={<h2>404 - Page Not Found</h2>} />
</Routes>
</div>
</Router>
</AuthProvider>
);
}

export default App;

