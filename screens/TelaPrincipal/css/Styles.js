import { StyleSheet } from "react-native";

export const format = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"white",
        justifyContent: "center",
    },
    header:{
        flex: 1,
        backgroundColor:"#7e57c2",
        flexDirection:"row",
        padding:10,

    },
    imgheaderesq:{
        width:40,
        height:40,
        top:15
       
    },
    imgheaderdir:{
        width:30,
        height:30,
        top:19
        
    },
    txtheader:{
        flex:3,
        color:"white",
        fontSize: 25,
        textAlign:"center",
        top:40
    },
    content:{
        flex:1,
        flexDirection:"row",
        
        
    },
    areabotao:{
        backgroundColor:"#1a237e",
    },
    footer:{
        flex:1,
        backgroundColor:"#673ab7",
        justifyContent:"center",
        alignItems:"center",
    },
    txtfooter:{
        color:"white",
        fontSize:20,
    },
    btn:{
        flex:1,
        padding: 20,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"silver",
        borderWidth:2,
        margin: 5,
        height:"10%"
    },
    imgbtn:{
        width:35,
        height:35,
    },
    txtbtn:{
        fontSize:15,
        textAlign:"center",
    },
    


});