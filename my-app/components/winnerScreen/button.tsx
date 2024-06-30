import {  View, Text, TouchableOpacity} from "react-native";
import { resultScreenStyle } from "@/components/ResultScreen/ResultscreenCSS";
import { winnerstyles } from "./winnerScreenCSS";


export default function Button() {
  return (
    
       <View style={[resultScreenStyle.scoreDetailsContainer, { flex: 0.2 }]}>
          <TouchableOpacity style={winnerstyles.button}>
            <Text style={winnerstyles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={winnerstyles.button}>
            <Text style={winnerstyles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>

  )
}