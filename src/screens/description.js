
import React, { Component } from 'react';
import { Container, Header,  Button, Text, Right, Left,Body,Title, Content,  Card, CardItem, Fab, Icon} from 'native-base';
    import {
        SafeAreaView,
        StyleSheet,
        View,
        ScrollView
      } from 'react-native';

export default class DescriptionPage extends Component {


    static navigationOptions = {
        title: 'Leave Type',
        headerStyle: {
            backgroundColor: '#989aa2',
          }
      };
     
    


    

      constructor(props){
        super(props);

    }




  render() {
    return (
        <Container>

        <Content>

        <Card>
    
        <CardItem header>
       
          <Text>Family</Text>
        </CardItem>
        <CardItem>
   
     <Body>
     <Text>
     
     Family Responsibility Leave can be taken in the event of the death of an employee's spouse/life partner, parent or adoptive parent, grandparent, child or adopted child, grandchild or sibling.
     
     </Text>   
          
     </Body>
            
             
   
   
   
   
        </CardItem>


        <CardItem >
       
        <View style = {styles.leaveCount}>
         <Text style={{
             textAlign:'center'
        
         }}>5</Text>
         </View>
      
        </CardItem>
     </Card>

        <Card>
    
     <CardItem header>
    
       <Text>Maternity</Text>
     </CardItem>
     <CardItem>

  <Body>
  <Text>
  
  A period of approved absence for a female employee granted for the purpose of giving birth and taking care of infant children. Maternity leave may last anywhere from several weeks to a period of months depending on the organization, and may be paid or unpaid depending on policies.
  
  </Text>   
       
  </Body>
         
          
        
 



     </CardItem>

     <CardItem >
       
     <View style = {styles.leaveCount}>
     <Text style={{
         textAlign:'center'
    
     }}>5</Text>
     </View>
      
        </CardItem>

     
     
  </Card>
      
                
        <Card>
    
        <CardItem header>
       
          <Text>Vacation</Text>
        </CardItem>
        <CardItem>

     <Body>
     <Text>
     
     Vacation is defined as leave with pay granted to employees for the purpose of rest, relaxation, and attendance to personal matters. Vacation benefits are available to calendar year employees whose appointments are for six months or more and whose work week is 20 hours or more.
     
     
     </Text>   
          
     </Body>
            
             
           
      


        </CardItem>


        <CardItem >
        <View style = {styles.leaveCount}>
        <Text style={{
            textAlign:'center'
       
        }}>5</Text>
        </View>
      
        </CardItem>
     </Card>


     <Card>
    
     <CardItem header>
    
       <Text>Sick</Text>
     </CardItem>
     <CardItem>

  <Body>
  <Text>
  
  Sick leave (or paid sick days or sick pay) is time off from work that workers can use to stay home to address their health and safety needs without losing pay. Paid sick leave is a statutory requirement in many nations. Most European, many Latin American, a few African and a few Asian countries have legal requirements for paid sick leave.
  
  </Text>   
       
  </Body>
         
          
        
   


     </CardItem>

     <CardItem >
       
     <View style = {styles.leaveCount}>
     <Text style={{
         textAlign:'center'
    
     }}>5</Text>
     </View>
      
        </CardItem>
  </Card>

     </Content>

      </Container>
    );
  }
}


const styles = StyleSheet.create({
   
    leaveCount:{

        backgroundColor:'#8DDC0B',
        bottom: 3,
        right: 30,
        width: 50, 
        height: 50,
        borderRadius: 50,
        position: 'absolute', right: 0,
        justifyContent: 'center'

    }

  });

