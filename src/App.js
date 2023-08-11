import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import { ShopContextProvider } from "./components/ShopContextProvider/ShopContextProvider";
import { NavBar } from "./components/NavBar/NavBar";
import { ShopPage } from "./pages/ShopPage/ShopPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const libraries = ["places"];

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <div className="appContainer">
          <LoadScript googleMapsApiKey={googleApiKey} libraries={libraries}>
            <NavBar />
            <Routes>
              <Route path="/" element={<ShopPage />} />
              <Route path="/shopping-cart" element={<CartPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </LoadScript>
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
