import React from 'react';
import { StyleSheet, Text, View ,Button ,Image} from 'react-native';


function About(props){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/about.png')} />
            <Button onPress={()=>props.navigation.navigate("Home")} title="go to home" />
        </View>
        
        );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    backgroundColor:'#fff',
     alignItems:'center',
     

    },
    image:{
        paddingTop:0,
        marginTop:0, 
        marginBottom:10,
        height:100,
        width:400,
        resizeMode:"contain"
    }

})


export default About;