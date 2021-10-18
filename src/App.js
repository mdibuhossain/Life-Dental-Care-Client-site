import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AuthProvider from './Context/AuthProvider';
import Contact from './Page/Contact';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
import ServiceDetail from './Page/ServiceDetail';
import Shop from './Page/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/service/:serviceID">
              <ServiceDetail />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
