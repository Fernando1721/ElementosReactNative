import React, { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Alert, Button, Image, Text, TouchableOpacity, View } from "react-native";
import { format } from "../../css/Styles.js";

export default function Content(props){

    


    return(
        <View style={{flex:8}}>
        <View style={format.content}>
            <TouchableOpacity onPress={()=>{props.acao.navigate("TelaCamera"); }} style={format.btn}>
                <Image source={require("../../../../assets/camera.png")} style={format.imgbtn} />
                <Text style={format.txtbtn}> Camera </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>props.acao.navigate("TelaGaleria")} style={format.btn}>
                <Image source={require("../../../../assets/galeria.png")} style={format.imgbtn} />
                <Text style={format.txtbtn}> Galeria </Text>
            </TouchableOpacity>    

            <TouchableOpacity onPress={()=>props.acao.navigate("TelaCodeBar")} style={format.btn}>
                <Image source={require("../../../../assets/CodigodeBarras.png")} style={format.imgbtn} />
                <Text style={format.txtbtn}> Código de Barras </Text>
            </TouchableOpacity>    
           </View> 
                
            



        </View>
    );
};

function camera(){
    Alert.alert("Camera", "Você clicou na camera!");
}

function galeria(){
    Alert.alert("Galeria", "Você clicou na galeria!");
}

function barcode(){
    Alert.alert("Barcode", "Você clicou no barcode!");
}