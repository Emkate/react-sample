import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header, HeaderName, Content } from 'carbon-components-react';
import ArticlesList from './components/Articles/ArticlesList';
import ArticlesDetails from './components/Articles/ArticlesDetails';
import ArticlesNew from './components/Articles/ArticlesNew';

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
            <Route path="/articles/list">
              <ArticlesList></ArticlesList>
            </Route>
            <Route path="/articles/edit/:itemId" component={ArticlesDetails}></Route>
            <Route path="/articles/newItem" component={ArticlesNew}></Route>
          </Switch>
        </Content>
      </Router>
    </div>
  );
}

export default App;
