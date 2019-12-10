import React, { Component } from 'react';
import { Container, Header,  Button, Right, Left,Body,Title, Content,  Card, CardItem, Icon, Footer} from 'native-base';
    import {
        SafeAreaView,
        StyleSheet,
        View,
        ScrollView,
        TouchableOpacity, 
        Text,
        TextInput
      } from 'react-native';


import {LocaleConfig, Calendar} from 'react-native-calendars';


LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';


export default class CalendarPage extends Component {

  static navigationOptions = {
    title: 'Leave Calendar',
    headerStyle: {
        backgroundColor: '#989aa2',
      }
  };
 

    

      constructor(props){
        super(props);
        this.state = {
          active: 'true'
        };


       
    }

   



  render() {
    return (
        <Container>
    
       <Content>


  


      <Calendar

      Default = {Date()}
  // Initially visible month. Default = Date()
  current= {Date()}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2012-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2012-05-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={(direction) => (<Arrow />)}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={true}
  // Show week numbers to the left. Default = false
  showWeekNumbers={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={substractMonth => substractMonth()}
  // Handler which gets executed when press arrow icon left. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
/>

     
       
       
       </Content>
                
              



             



      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop:10,
      flex: 1,
    },
    textInput: {
      borderBottomWidth: 0.3,
      borderBottomColor: 'black',
      height: 25,
      fontSize: 16,
      marginVertical: 50,
      marginHorizontal: 20,
    },
    leaveTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28,
        marginTop:5,
        textAlign:'center'
    },
    leave: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28,
        marginTop:50,
        textAlign:'center'
    },
    sick: {
       height:20,
       backgroundColor:'#7a42f4'
    },
    vacation: {
        height:20,
        backgroundColor:'#f4db87'
     },

     fab: { 
      position: 'absolute', 
      width: 56, 
      height: 56, 
      alignItems: 'center', 
      justifyContent: 'center', 
      right: 20, 
      bottom: 20, 
      backgroundColor: '#03A9F4', 
      borderRadius: 30, 
      elevation: 8 
      }, 
      fabIcon: { 
        fontSize: 40, 
        color: 'white' 
      }

  });