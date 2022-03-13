import { StyleSheet } from "react-native";

const home = StyleSheet.create({
    container:
    {
        width:'100%',
        height:'100%',
    },
    textContainer:
    {
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop:180,
    },
    image:
    {
        width:"100%",
        height:"100%",
        position:"absolute",
        resizeMode:"cover",
    },
    button:
    {
        backgroundColor:"transparent",
        color:"white",
        borderWidth:2,
        borderColor:"white",
        padding:15,
        marginRight:55,
        marginLeft:55,
        margin:15,
        fontSize:20,
        textAlign:"center",
        fontFamily:"monospace",

    },
    welcome:
    {

        color:"white",
        fontSize:45,
        fontWeight:"bold",
        letterSpacing:10,
        borderBottomColor:"white",
        borderBottomWidth:2,
        paddingBottom:15,
        marginBottom: 35,
    },
    logo:
    {
        color:"white",
        fontFamily:"sans-serif-thin",
        fontWeight:"500",
        fontSize: 55,
        marginBottom:25,
    },
    subheading:
    {
        color:"white",
        fontFamily:"sans-serif-thin",
        fontWeight:"bold",
        textTransform:"uppercase",
        marginBottom:15,
    },
});

export default home;