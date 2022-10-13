import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

const task = (props) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemleft}>
             <View style={styles.square}></View>
            <Text style={styles.itemName}>{props.text}</Text>
        </View>
        <View style={styles.circuler}></View>
    </View>
  )
}

export default task

const styles = StyleSheet.create({

item :{
    backgroundColor:'#fff',
    padding :15,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom: 20,
    marginTop:10,  
},
itemleft :{
  flexDirection:'row',
  alignItems:'center',
  flexWrap:'wrap',
},
square :{
    width :24,
    height:24,
    backgroundColor: '#4db8ff', 
   opacity:0.5,  
   borderRadius:5,
   marginRight:15,
},
itemName:{},
circuler:{
  width:12,
  height:12,
  borderBottomColor:'#000000',
  borderRadius:6,
  borderWidth:1,
},
});