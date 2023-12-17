import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import  play from "../assets/symbol-on.png";
import stop from "../assets/symbol-off.png";
export function Home() { 

const isActivity = false;


  return (
    
    <View style={isActivity? styles.containerOn: styles.containerOff}>
     
      <Image source={isActivity? play: stop} />     
      
    </View>    
  )
}