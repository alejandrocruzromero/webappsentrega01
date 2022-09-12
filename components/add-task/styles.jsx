import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    input:{
        //colors.co
        borderBottomColor:'#4A306D',
        borderBottomWidth: 1,
        height:50,
        height: 40,
        color:'#212121',
        fontSize:20,
        width:'75%',
        
      },
    
    
      inputContainer:{
        marginTop:50, //Unidades , no son pixesles, es un calculo en base al dispositivo
        MarginBottom:20, //si es porcentaje va entre comillas '20%'
        marginHorizontal:20, // Izquierda / Derecha
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft: 30,
      },
      

    
})