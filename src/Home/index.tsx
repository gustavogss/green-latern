import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import  play from "../assets/symbol-on.png";
import stop from "../assets/symbol-off.png";
import { useState } from "react";

export function Home() { 

const [isActivity, setisActivity] = useState(false);

function handlerClick(){
  setisActivity(!isActivity);
}

  return (    
    <View style={isActivity? styles.containerOn: styles.containerOff}>     
     <TouchableOpacity onPress={handlerClick} >
      <Image source={isActivity? play: stop} />    
      </TouchableOpacity>       
    </View>    
  )
}