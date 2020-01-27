import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'; 
import ShopPage from './pages/shoppage/shop.component';

import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop" component= {ShopPage}/>
        <Route path="/" component= {HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
