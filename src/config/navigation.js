import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home'
import About from '../screen/About' 
import  {Image, } from 'react-native'

const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen  options={{title:" todo", headerStyle: {backgroundColor: 'white'},
                                headerTitle : props => <Image style={{height:50,width:50}} source={require('../../assets/logo.png')} />}} 
                            name="Home" component={Home} />

        <Stack.Screen options={{title :"about us", headerStyle:{backgroundColor:"white"},
                                headerTitle : props => <Image style={{height:50,width:50}} source={require('../../assets/logo.png')} /> }}
                            name="About" component={About}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const styles=StyleSheet.create({
//     header:{
//         margintop:20,
//     },
// })


export default Nav;
