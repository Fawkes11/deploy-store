import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import CartContext from "./modules/CartContext";

import useCart from "./modules/useCart";

function App() {
  return (
    <CartContext.Provider value={useCart([])}>
      <Router>
        <Navigation />
        <Route path="/deploy-store" exact component={Home} />
        <Route path="/deploy-store/About" component={About} />
        <Route path="/deploy-store/Menu" component={Menu} />
        <Route path="/deploy-store/Services" component={Services} />
        <Route path="/deploy-store/Contact" component={Contact} />
        <Route path="/deploy-store/CartPage" component={CartPage} />
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
