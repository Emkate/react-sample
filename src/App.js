import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Navbar } from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header, HeaderName, Content } from 'carbon-components-react';
import { ItemsList } from './components/itemsList/ItemsList';

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
          </Switch>
        </Content>
    </Router>
      </div>

  );
}

export default App;
