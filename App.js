
import React from 'react';
import Container from './AppNavigator';

import firebase from 'react-native-firebase';



var firebaseConfig = {
  apiKey: "AIzaSyCNDRhvHpButXWcsc7W3S4n12rezL-Co5g",
  authDomain: "leaveapp-26b5b.firebaseapp.com",
  databaseURL: "https://leaveapp-26b5b.firebaseio.com",
  projectId: "leaveapp-26b5b",
  storageBucket: "",
  messagingSenderId: "434222984579",
  appId: "1:434222984579:web:e37b60e1ee59474a3cdab6"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {


  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null,
    };
  }


  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }


  render() {

  
     return( <Container/>
  
     )
  
  
  }
}