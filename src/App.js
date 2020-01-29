import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'; 
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.components'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';

import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/signin" component= {SignInAndSignUpPage}/>
        <Route path="/shop" component= {ShopPage}/>
        <Route path="/" component= {HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
