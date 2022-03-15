import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";

const contact = StyleSheet.create({
    container:
    {
        width:'100%',
        height:'100%',
    },
    image:
    {
        width:"100%",
        height:"100%",
        position:"absolute",
        resizeMode:"cover",
        opacity:0.3,
    },
    content:
    {
        padding:25,
    },
    heading:
    {
        color:"white",
        textAlign:"center",
        padding:15,
        fontSize:45,
        fontFamily:"sans-serif-thin",
        fontWeight:"bold",
        marginTop:45,
        marginBottom:45,
        borderColor:"white",
        borderBottomWidth:2,
    },
    form:{
      
    },
    email:
    {
        backgroundColor: "white",
        color:"black",
        padding:10,
        marginBottom:25,
        borderRadius:10,
        
    },
    message:
    {
        backgroundColor: "white",
        color:"black",
        paddingBottom:140,
        padding:10,
        borderRadius:10,
    },
    button:
    {
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        backgroundColor:"transparent",
        marginTop:55,
        padding:15,
        textAlign:"center",
        borderRadius:35,
        borderColor: "white",
        borderWidth:2,
    }
 
});

export default contact;