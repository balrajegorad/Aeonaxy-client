import { Routes, Route, Navigate } from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import CreateProfilePage from "./pages/CreateProfilePage";
import DescribeYourself from "./pages/DescribeYourself";
import Home from "./pages/Home";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import EmailVerify from "./pages/EmailVerify";

function App() {
  const { user } = useContext(AuthContext);
  
  return (
    <Routes>
      <Route path="/" element={user? <Home /> : <SignupForm />} />
      <Route path="/register" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/createprofile" element={<CreateProfilePage />} />
      <Route path="/describe-yourself" element={<DescribeYourself />} />
      <Route path="/verifyuseremai" element={<EmailVerify />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
