import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Services" component={Services} />
          <Route path="/Contact" component={Contact} />
          <Route path="/CartPage" component={CartPage} />
        </Switch>
        
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
