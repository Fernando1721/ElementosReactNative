import { Image, Text, View, TouchableOpacity } from "react-native";
import { format } from "../../css/Styles.js";

export default function Header(){
    return(
        <View style={format.header}>

            <TouchableOpacity onPress={()=>alert("Você clicou no logo do F's!")}>
            <Image source={require('../../../../assets/logofs.png')} style={format.imgheaderesq}/>
            </TouchableOpacity>


            <Text style={format.txtheader}> Elementos </Text>

            <TouchableOpacity onPress={()=>alert("Você clicou nas configurações do F's!")}>
            <Image source={require('../../../../assets/config.png')} style={format.imgheaderdir}/>
            </TouchableOpacity>

        </View>    

    )
}