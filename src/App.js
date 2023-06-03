import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./components/ShopContextProvider/ShopContextProvider";

import { NavBar } from "./components/NavBar/NavBar";
import { ShopPage } from "./pages/ShopPage/ShopPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <div className="appContainer">
          <NavBar />
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/shopping-cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
