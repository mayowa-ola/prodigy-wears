import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom'; 
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import './App.css';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckOut from './pages/checkout/checkout.component';


class App extends Component {



    unsubscribeFromAuth = null; //unsubsrcibing autheticated users from firebase

    componentDidMount() {
      const {setCurrentUser} = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef =  await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          });
        });
      }
        setCurrentUser(userAuth);

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
          <Header/>
          <Switch>
            <Route path="/signin" render={()=>this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)}/>
            <Route path="/shop" component= {ShopPage}/>
            <Route path="/checkout" component= {CheckOut}/>
            <Route path="/" component= {HomePage}/>
          </Switch>
        </div>
      );
    }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
 setCurrentUser: user =>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);



