import { BrowserRouter, Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import NavBar from "./pages/navBar/NavBar";
import AppRouter from "./routes/Route";

export default function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
