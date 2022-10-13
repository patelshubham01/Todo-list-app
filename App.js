import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null)
  }

  const completeTask =(index)=>{
    let itemscopy =[...taskItems];
    itemscopy.splice(index,1);
    setTaskItems(itemscopy);
  }
  

  return (
    <View style={styles.container}>
     <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}> Today's Tasks </Text>

      <View style={styles.Items}>
        {
          taskItems.map((item,index) => {
            return(
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                 <Task text={item} />
              </TouchableOpacity>
            )
            
           
          })
        } 
      </View>
     
     </View>
     <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>

      <TextInput style={styles.input}placeholder={"Write a task"} value={task} onChangeText={text => setTask (text)}/>

      <TouchableOpacity onPress={()=> handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
          </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3cbcb',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
  fontSize:24,
  fontWeight:'bold'
  },
  Items:{
  marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:30,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingHorizontal:15,
    paddingVertical:15,
    backgroundColor:'#FFF',
    borderRadius:30,
    borderColor:'#C0C0C0',
    borderWidth:2,
    width:250,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:2,


  },
});
