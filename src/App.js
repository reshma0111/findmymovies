import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import About from './components/pages/About';
import pageNotFound from './components/pages/pageNotFound';
import Header from './components/layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditCustomer from './components/customer/EditCustomer';
import Customers from './components/customer/Customers'
import AddCustomer from './components/customer/AddCustomer';
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
   
    <Header branding="FindmyMovies" />
            <div className="container">
   
    <Switch>
    <Route exact path = "/about" component ={About}/>
    <Route exact path = "/customer/edit/:id" component ={EditCustomer}/>
    <Route exact path = "/add" component ={AddCustomer}/>
    <Route exact path = "/" component = {Customers}/>
    <Route component={pageNotFound} />
    </Switch>
    </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
