import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import SignIn from "./pages/SignIn.jsx";
export default function App() {
  return (
    <Router>
        <ToastContainer
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  pauseOnHover
  draggable
  theme="light"
/>
      <Navbar />
        <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/product" element={<Products />}/>
        <Route  path="/signin"  element={<SignIn />}/>
        </Routes>
    </Router>
  );
}