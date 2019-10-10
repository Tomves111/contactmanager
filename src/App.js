import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import EditContact from './components/contacts/EditContact'
import Header from './components/layout/Header';
import About from './components/pages/About';
import Test from './components/test/Test';
import NotFound from './components/pages/NotFound';
import Addcontact from './components/contacts/Addcontact1';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from './context'

class App extends Component {
  render(){
  return(
    <Provider>
      <Router>
    <div className="App">
      <Header branding="Contact manager"/>
    <div className="Container">
      <Switch>
    <Route exact path = "/" component = { Contacts } />
    <Route exact path = "/about" component = { About } />
    <Route exact path = "/contact/AddContact" component = { Addcontact } />
    <Route exact path = "/contact/edit/:id" component = { EditContact } />
    <Route exact path = "/test" component = { Test } />
    <Route component={NotFound} />
      </Switch>
</div>
    </div>
    </Router>
    </Provider>
  );
  }
}

export default App;
