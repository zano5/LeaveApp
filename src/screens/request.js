import React, { Component } from 'react';
import { Container,  Button, Text, Right, Left,Body,Title, Content} from 'native-base';
import firebase from 'react-native-firebase'


    import {
    
        StyleSheet,
        View,
        TextInput,
        Picker
   
      } from 'react-native';

import DatePicker from 'react-native-datepicker';



export default class RequestPage extends Component {




  
  itemValue = 'Family Responsibility';

  constructor(props) {
      
    super(props);
    this.state= {description:'',dateFrom:'',dateTo:'', type:'',  isLoading: true}
 

 };








   request()
   {

    this.leave.status = 'pending';
    this.leave.userID = firebase.auth().currentUser.uid;
     this.leave.type = this.state.type;
     this.leave.description = this.state.description;
     this.leave.from = this.state.dateFrom;
     this.leave.to = this.state.dateTo;

     firebase.firestore().collection('Leave').add(this.leave).then(() =>{

      alert('Successfullly Submitted Leave Request');


     });

     //firestore.collection('Leave').add(this.leave);
   
  

   

   }
   



   
   date = new Date(). getDate(); //Current Date.
   month = new Date(). getMonth() + 1; //Current Month
   year = new Date(). getFullYear(); //Current Year
  handleChange = (event) => {
    setValue(event.target.value);
};


  leave= {

    
    type: String,
    reason: String,
    from: String,
    to: String,
    status: String,
    description: String,
    userID: String
    

    


  }



     
    static navigationOptions = {
      title: 'Request Leave',
      headerStyle: {
          backgroundColor: '#989aa2'
      }
      };


    

     


  


  


   

  render() {
    return (
        <Container>


       

        <Picker
     
  selectedValue={this.state.type}
  style={{height: 50, width: 200}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({type: itemValue})
  }
 >
  <Picker.Item label="Leave Type" />
  <Picker.Item label="Family Responsibility" value="Family Responsibility" />
  <Picker.Item label="Maternity" value="Maternity" />
  <Picker.Item label="Sick" value="Sick" />
  <Picker.Item label="Vacational" value="Vacational" />
</Picker>

     
        <View style={styles.textAreaContainer} >
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Reason For Taking Leave"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
    ref= {(el) => { this.description = el; }}
    onChangeText={(description) => this.setState({description})}
    value={this.state.description}
        />
      </View>


      <View style={styles.container}>
      <Text>From:</Text>
     <DatePicker
      
        style={{width: 200}}
        date= {this.year + "-" + this.month + "-" + this.date }
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate= {this.year + "-" + this.month + "-" + this.date }
        maxDate="2050-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({dateFrom: date})}}
      />


    </View>



    <View style={styles.container}>
    <Text>To:</Text>
   <DatePicker
      style={{width: 200}}
      date= {this.year + "-" + this.month + "-" + this.date }
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate= {this.year + "-" + this.month + "-" + this.date }
      maxDate="2050-06-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36
        }
        // ... You can check the source to find the other keys.
      }}
      onDateChange={(date) => {this.setState({dateTo: date})}}
    />


  </View>



    <Button full style={styles.button}   onPress= {() => this.request()} > 
    <Text>Request</Text>
    </Button>
     






    
       



      </Container>
    );
  }
}

const styles = StyleSheet.create({
   

  textAreaContainer: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
  container: {
   
    alignItems: 'center',
    justifyContent:'center',   
    padding:16
 },
 button:{
  backgroundColor:'#8DDC0B'
},
leaveText:{

  marginLeft: 5,
  marginTop:5

}
   

  });