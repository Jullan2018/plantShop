import { StyleSheet } from "react-native";

const shop = StyleSheet.create({
    container:
    {
        width:'100%',
        height:'100%',
        backgroundColor:"#ecf0f1",
        padding:25,
        
    },
    card:
    {
        backgroundColor:"white",
        borderRadius:20,
        shadowColor:"black",
        shadowRadius:4,
        shadowOffset: {
            height: 0,
            width: 0,
          },
          elevation: 1,
          marginVertical: 20,
    },
    thumb: {
        height: 260,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: '100%',
      },
      infoContainer: {
        padding: 16,
      },
      name: {
        fontSize: 22,
        fontWeight: 'bold',
      },
      price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
      },
});

export default shop;