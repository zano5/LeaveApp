import React, { Component } from 'react';
import { Container, Header,  Button, Right, Left,Body,Title, Content,  Card, CardItem, Icon, Footer} from 'native-base';
    import {
        SafeAreaView,
        StyleSheet,
        View,
        ScrollView,
        TouchableOpacity, 
        Text,
        TextInput,
        FlatList
      } from 'react-native';
import RNSpeedometer from 'react-native-speedometer';
import firebase from 'react-native-firebase';







export default class HomePage extends Component {

 

      userID = firebase.auth().currentUser.uid;

     fire =firebase.firestore().collection('Leave');

    


     
    static navigationOptions = {
        header: null 
      };


    

      num = 20;



    

      constructor(props){
        super(props);

        this.state = {
          active: 'true',
          fireLeaveArray: [],
          list: [1, 2, 3]
        };




       
    }


    componentDidMount() {



      this.fire.onSnapshot(snap=>{


        snap.forEach(doc=>{

          console.log("fireData",doc.data());

         // alert(doc.data().type)

          this.state.fireLeaveArray.push(doc.data());

          // 

          //   alert(data.type);

          // };      

        });

      });
     
    }
  
  

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }


    onChange = (value) => this.setState({ value: parseInt(value) });

  render() {
    return (
        <Container>
        <Header style={{
            backgroundColor:'#989aa2'
        }}>

        <Left>
        <Button transparent onPress={() =>
            this.props.navigation.navigate('Description')
          }>
          <Icon name='paper' />
        </Button>
      </Left>
         
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent onPress={() =>
                this.props.navigation.navigate('Login')
              }>
              <Text>Logout</Text>
            </Button>
          </Right>
        </Header>

                <Content>            
         <SafeAreaView style={styles.container}   >
       
          <RNSpeedometer value={this.num} maxValue={30} size={250} labels= {[
            {
              name : '',
              labelColor: '#ff2900',
              activeBarColor: '#ff2900',
            },
            {
              name: '',
              labelColor: '#ff5400',
              activeBarColor: '#ff5400',
            },
            {
              name: '',
              labelColor: '#f4ab44',
              activeBarColor: '#f4ab44',
            },
            {
              name: '',
              labelColor: '#f2cf1f',
              activeBarColor: '#f2cf1f',
            },
            {
              name: '',
              labelColor: '#14eb6e',
              activeBarColor: '#14eb6e',
            },
            {
              name: '',
              labelColor: '#00ff6b',
              activeBarColor: '#00ff6b',
            },
          ]} />
        </SafeAreaView>

    

          
       
        

        <Text style={styles.leave}>Leave Type</Text>

  
        <View>
        <Text>Hello React Native</Text> 
        {this.state.fireLeaveArray.forEach(data=>{
          {alert(data.type)} // Displaying the users properly in the console.
          return (
           <View>
            <Text>
              {data.type}
            </Text>
           </View>
          )
        })}
      </View>








                
                </Content>



                <Footer>

                <View style={styles.container}>
              
                <TouchableOpacity onPress={() =>
                  this.props.navigation.navigate('Request')
                } style={styles.fab}>
                  <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>
              </View>
              </Footer>



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