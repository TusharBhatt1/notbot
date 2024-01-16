import { BrowserRouter, Route, Routes } from "react-router-dom";


import LoginSignUp from "./pages/LoginSignUp";
import Dashboard from "./pages/Dashboard";
import Footer from "./Components/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="488844074636-n73vo6fvqprll9t55emgajbhder478pq.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginSignUp />} />
          <Route path="/home" element={<LoginSignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
