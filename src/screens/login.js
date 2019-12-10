import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { Image, StyleSheet, View ,TextInput} from "react-native";
import firebase from 'react-native-firebase';


export default class LoginPage extends React.Component {


    static navigationOptions = {
        header: null ,
      };
   


    constructor(props) {
      
        super(props);
        this.state= {email:'',password:'', isLoading: true}
     
    
     }




   


      

          SignIn (){
            try {

              
              firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

              
              firebase.auth().onAuthStateChanged(user => {
             


                 this.props.navigation.navigate('Home');

              })
        } catch (error) {
              console.log(error.toString(error));
            }
          };

        
        

     handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }


     login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
     }


    render() {
        return (

    
            <Content style={{ backgroundColor: '#FFFFFF'}}>

            <View  style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>

              <Image  
              source={require('../assets/mlab.png')}
            />

          </View>
          <View  style={styles.searchSection}>
          <Icon style={styles.searchIcon} name="person" size={20} color="#000"/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
               </View>

               <View  style={styles.searchSection}>
               <Icon style={styles.searchIcon} name="eye" size={20} color="#000"/>
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
               </View>
            
          <Button full style={styles.button} 
          onPress= {() => this.SignIn() }
           



          > 
          
          
          <Text>Login</Text>
          </Button>
           
          </Content>

       
        );
      }
    }



    const styles = StyleSheet.create({
        container: {
          
            backgroundColor: '#FFFFFF'
            
        },
        submitButton: {
           backgroundColor: '#7a42f4',
           padding: 10,
           margin: 15,
           height: 40,
        },
        submitButtonText:{
           color: 'white'
        },
        button:{
            backgroundColor:'#8DDC0B'
        },
        searchIcon: {
            padding: 10
        },
        searchSection: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderColor:'#989aa2',
            borderWidth: 1
        },
        input: {
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            backgroundColor: '#fff',
            color: '#424242',
           
        }
     })

     
  
    




