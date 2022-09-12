import { AddTask, CustomModal } from './components/index';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React,{useState} from 'react';

//https://github.com/sotopro/mynewproject.git
//Safeareaview 
//colors.co
//https://reactnative.dev
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1, //
    
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  
  
  itemList:{
    flex:1,
    marginHorizontal:20,
    marginHorizontal:20,
  },
  itemContainer:{
    flex:1,
    marginVerticasl:5,
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems:'center',
    marginVertical:10,
    backgroundColor:'#b9b9b9',
    paddingHorizontal:10,
    paddingVertical:20,
    borderRadius:10,

    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
  },


  itemContainerb:{
    flex:1,
    marginVerticasl:5,
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems:'center',
    marginVertical:10,
    backgroundColor:'#b9b9b9',
    paddingHorizontal:10,
    paddingVertical:20,      
  },


  item:{
    fontSize:26,
    color:'#212121',

  },
  delete:{
    fontSize:18,
    fontWeight:'bold',
    color:"#ffffff"
    
  },
  ok:{
    fontSize:18,
    fontWeight:'bold',
    color:"#ffffff"
    
  },
 

  modalContainer:{
    
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:20,
      marginTop: 30,


  


  },
  modalTitle:{
    fontSize:28,
  },
  modalMessageContainer:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10,
    
  },
  modalMessage:{
    fontSize:14,    

    
  },
  selectedTask:{
    fontSize:18,
    color: "#000000",
    fontWeight:'bold',

  },
  buttonContainer:{
    paddingVertical:100,
    flexDirection:'row',
    justifyContent:'space-around',
    marginHorizontal:20,
  },
  buttonBorrar:{
    backgroundColor:"#9e1f1f",
    padding:10,
    borderRadius:10,
  },
  buttonOK:{
    backgroundColor:"#05862c",
    padding:10,
    borderRadius:10,
  },
});



export default function App() {

  
  const [isActive, setIsActive] = useState(false);
  

  const[task,setTask] = useState('');
  const[tasks,setTasks] = useState([]);
  const[modalVisible,setModalVisible] = useState(false);
  const[selectedTask,setSelectedTask] = useState(null);
  let respuesta = "";
  const onHandleModal =(id)=>{
    setModalVisible(!modalVisible);
    setSelectedTask(tasks.find((item)=>item.id===id));
   // console.warn(id);
  }

  const onHandleModalOK =(id)=>{
    //setModalVisible(!modalVisible);
    //setSelectedTask(tasks.find((item)=>item.id===id));    
    console.warn("Tarea Terminada.");
    // respuesta = "hola";
    setIsActive(true);
  }

  const onHandleChangeText = (text)=>{
    setTask(text);
  }
  //agregar a la lista
  const addItem = () => {
    setTasks([
      ... tasks,
      {
        //id:tasks.length + 1,//Math.random().toString(),
        //id: tasks[tasks.length]?.id + 1,//Math.random().toString(),
        id:Date.now(),
        value:task
      }
    ]);
    setTask('');
  }
   //console.warn('task',task);
   // console.warn('tasks',tasks);

  const renderItem = ({item})=>(
    
    <View style={styles.itemContainer}>
         
          
        <TouchableOpacity 
          style={styles.buttonOK}
          onPress={()=>onHandleModalOK(item.id)}
          color={ isActive ? "#841584" : "red"}>   
               
          <Text style={styles.ok}>√</Text>
      </TouchableOpacity>
    <Text style={styles.item}> {item.value}
    </Text>
    
    <View style={styles.itemContainerb}></View>
    <TouchableOpacity style={styles.buttonBorrar}onPress={()=>onHandleModal(item.id)}>
        <Text style={styles.delete}>X</Text>
    </TouchableOpacity>


    
    
    </View>

    
  )

  const onHandleDeleteItem =(id) =>{
    setTasks(tasks.filter((item)=>item.id !== id));
    setSelectedTask(null);
    setModalVisible(!modalVisible)
  }
  return (
    <View style={styles.container}>
      <AddTask 
        item = {task}
        onChangeText  ={onHandleChangeText}
        placeholder = 'Nuevo elemento'
        addItem ={addItem}
        selectionColor ='#4A306D'
        placeholderTextColor ='#4A306D'
        textButton ='ADD'
        color='#4A306D'
      >

      </AddTask>
      {/* <View style={styles.inputContainer}>
        <TextInput 
                    placeholder='Escribi aqui boludo---' 
                    style={styles.input} 
                    selectionColor='#4A306D' 
                    placeholderTextColor='#4A306D'                    
                    onChangeText = {onHandleChangeText}
                    value = {task}
                    />        
        <Button title='add' 
                onPress={addItem} 
                color='#4A306D'
                /> 
      </View> */}
{/* //para mostrar lista */}
      {/* <View style={styles.itemList}>
        {tasks.map((item)=>(
          <View key={`item-${item.id}`} style={styles.itemContainer}>
            <Text style={styles.item}> {item.value}</Text>
          </View>
        ))}
      </View> */}
{/* flatlist */}
        <FlatList
            style={styles.itemList}
            data={tasks}
            renderItem={renderItem}            
            keyExtractor={(item)=>item.id.toString()}
            showsVerticalScrollIndicator={false}

        />
          

      {/* <View>
        <View style={styles.inputContainerb}>
          <TextInput placeholder='Escribi aqui boludo!' style={styles.input} selectionColor='#4A306D' placeholderTextColor='#4A306D'/>        
        </View>
        <View style={styles.inputContainerb}>
          <TextInput placeholder='Escribi aqui boludo!!' style={styles.input} selectionColor='#4A306D' placeholderTextColor='#4A306D'/>        
        </View>
        <View style={styles.inputContainerb}>
          <TextInput placeholder='Escribi aqui boludo!!!' style={styles.input} selectionColor='#4A306D' placeholderTextColor='#4A306D'/>        
        </View>
        
      </View> */}
      {/* <StatusBar style="auto" /> */}



      {/* //MODAL AL FINAL */}
      <CustomModal  animationType='slide' visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle de la lista</Text>
        </View>
        <View style={styles.modalMessageContainer}>
          <Text style={styles.modalMessage}>Seguro de que quieres eliminar?</Text>
        </View>

        <View style={styles.modalMessageContainer}>
          <Text style={styles.selectedTask}> { selectedTask?.value}</Text>
        </View>

      <View style={styles.buttonContainer}>
        <Button 
          title='Eliminar'
          onPress={()=>onHandleDeleteItem(selectedTask?.id)}
          color="#4A306D"
          />

        <Button 
            title='Cancelar'
            onPress={()=>setModalVisible(!modalVisible)}
            color="#cccccc"
            />
      
    
      </View>

      </CustomModal>

    </View>
  );
}



