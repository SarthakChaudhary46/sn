import react from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, Pressable, StatusBar, Alert} from 'react-native';

import logo from "../assets/SN.png"

const IntroScreern = () =>{

  return(
    <View style={styles.container}>
      <View style={styles.inner}>
      
        <Image source={logo} style={styles.img}/>

        <Text style={styles.innerText}>We're the best of the best </Text>
      
      </View>
    
    </View>
  )

}

const styles = StyleSheet.create({

  container:{
    backgroundColor:'#b3a900',
    flex:1,
    // height:1000,
    width:1000,
    alignItems:'center',
    justifyContent:'center',
    padding:10

    
  },

  inner:{
    alignContent:'center',
    justifyContent:'center'
  },

  innerText:{
    color:'black',
    fontSize:30,
    marginLeft:30
  },

  img:{
    marginLeft:'center'
  }
});

export default IntroScreern;