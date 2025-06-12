import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import VerificationForm from "./pages/verificationform/VerificationForm";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <VerificationForm />
      <Footer />
    </>
  );
}

export default App;
