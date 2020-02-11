import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header, HeaderName, Content } from 'carbon-components-react';
import ItemsList from './components/ItemsList/ItemsList';
import ItemDetails from './components/ItemDetails/ItemDetails';

function App() {
  return (
    <div className="App">
        <Header aria-label="Crud App">
          <HeaderName>Crud App</HeaderName>
        </Header>

        <Navbar></Navbar>
        
      <Router>
        <Content className="full-width">
          <Switch>
            <Route exact path="/">
              <div>glowna strone hehehehe</div>
            </Route>
            <Route path="/list">
              <ItemsList></ItemsList>
            </Route>
            <Route path="/edit/:itemId" component={ItemDetails}>
            </Route>
          </Switch>
        </Content>
      </Router>
    </div>
  );
}

export default App;
