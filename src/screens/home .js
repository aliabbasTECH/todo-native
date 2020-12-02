import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Home(){
    return(
          <View>
              <Text>home</Text>
          </View>
    );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#fff",
      justifyContent:'center',
      
    },
})

export default Home;