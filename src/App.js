import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'; 
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.components'

import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/shop" component= {ShopPage}/>
        <Route path="/" component= {HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
