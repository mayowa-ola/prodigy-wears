import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom'; 
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.components'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import './App.css';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


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
            <Route path="/signin" component= {SignInAndSignUpPage}/>
            <Route path="/shop" component= {ShopPage}/>
            <Route path="/" component= {HomePage}/>
          </Switch>
        </div>
      );
    }
}
const mapDispatchToProps = dispatch => ({
 setCurrentUser: user =>dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);



