import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation'
import Footer from './components/Footer';

import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (

    <Router>
      <Navigation/>
      <Route path="/deploy-store" exact component={Home}/>
      <Route path="/deploy-store/About"  component={About}/>
      <Route path="/deploy-store/Menu"  component={Menu}/>
      <Route path="/deploy-store/Services"  component={Services}/>
      <Route path="/deploy-store/Contact"  component={Contact}/>
      <Footer/>
    </Router>
    
  );
}

export default App;
