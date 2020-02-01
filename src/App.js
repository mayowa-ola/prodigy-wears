import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'; 
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.components'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import './App.css';
import { auth } from './components/firebase/firebase.utils';


class App extends Component {

    state= {
      currentUser: null
    }

    unSubsribeFromAuth = null; //unsubsrcibing autheticated users from firebase

    componentDidMount() {
      this.unSubsribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({currentUser:user});

        console.log(user);
      })
    }

    componentWillUnmount(){
      this.unSubsribeFromAuth();
    }

    render() {
      return (
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route path="/signin" component= {SignInAndSignUpPage}/>
            <Route path="/shop" component= {ShopPage}/>
            <Route path="/" component= {HomePage}/>
          </Switch>
        </div>
      );
    }
}

export default App;



