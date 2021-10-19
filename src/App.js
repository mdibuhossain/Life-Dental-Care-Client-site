import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AuthProvider from './Context/AuthProvider';
import Appointment from './Page/Appointment';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
import ServiceDetail from './Page/ServiceDetail';
import Shop from './Page/Shop';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
            <PrivateRoute path="/service/:serviceID">
              <ServiceDetail />
            </PrivateRoute>
            <PrivateRoute exact path="/shop">
              <Shop />
            </PrivateRoute>
            <PrivateRoute exact path="/appointment">
              <Appointment />
            </PrivateRoute>
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
