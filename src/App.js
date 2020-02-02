import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'; 
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.components'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import './App.css';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';


class App extends Component {

    state= {
      currentUser: null
    }

    unsubscribeFromAuth = null; //unsubsrcibing autheticated users from firebase

    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef =  await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
        this.setState({currentUser:userAuth});

        // console.log(user);
        // createUserProfileDocument(user);
      });
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
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



