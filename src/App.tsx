import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <div className="text-2xl px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
