import React, {useState} from 'react';
import { StyleSheet, Text, View , Button, Image, TouchableOpacity,TextInput,FlatList  } from 'react-native';





function Home(props){
    const [obj,setObj]= useState([])
  const [text,settext]= useState([])
 const [empty,setEmpty]= useState([''])

const add=()=>{
    setObj([...obj,text])
      settext(empty)
      setObj([...obj,text])
     }  

const delet=(index)=>{
    setObj(obj.splice(index,1))
    setObj([...obj])
}

const edit=(index)=>{
    // var Update=  prompt("enter totdos") 
    setObj([obj[index]])
    
    
}
       
    return(
    
        <View style={styles.container}>
            <Text style={styles.banner}>TODO LIST</Text>
            <TextInput style={styles.input} placeholder="Enter todo" onChangeText={(e)=>settext(e)}  />
            
              <Text style={{width:'100%',textAlign:'center'}} >  {obj.map((v,i)=>{
                  return <Text style={{width:'100%'}}  key={i}>  {v}
                  <Button style={styles.libtn} color="green" title="&#9998;"  onPress={()=>edit(i)} />  
                  <Button style={styles.libtn} color="red" title="&#10005;"   onPress={()=>delet(i)} />{'\n' } 
              </Text>
              })} </Text>
           
            <TouchableOpacity style={styles.Addbutn} onPress={add} >
              <Text  style={styles.butn}>&#x2b;</Text>
            </TouchableOpacity>
              
            {/* <Image style={styles.image} source={require('../../assets/about.png')} /> */}

            {/* <Button onPress={()=>props.navigation.navigate("About")} title="go to about" /> */}
        </View>
        
        );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    backgroundColor:'#fff',
     alignItems:'center',   
    },
    banner:{
        fontSize:40,
        color:'white',
        fontWeight:'bold',
        backgroundColor:'#47D1F9',
        width:'100%',
        textAlign:"center",
        alignItems:'center',
        paddingTop:15,
        height:80,
    },
    input:{
        width:'100%',
        height:50,
        borderColor: '#47D1F9',
        borderWidth: 1,
        fontSize:20,
        padding:10,
    },
    Addbutn:{
        borderWidth:3,
        borderRadius:60,
        width:50,
        height:50,
        paddingBottom:5,
        justifyContent:'center',
        alignItems:'center',
        borderColor:"#47D1F9",
        position: 'absolute', //Here is the trick
        bottom: 10, //Here is the trick
        right:10,
        backgroundColor:"#47D1F9",
    },
    butn:{
        fontSize:50,

        color:"white"
    },
    libtn:{
        width:50,
        height:50,
        
    },
    listitem:{
        
         backgroundColor:"#7EE2FF",
         padding:9,
         
        
    }
})


export default Home;