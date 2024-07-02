import {  View, Text, TouchableOpacity} from "react-native";
import { winnerstyles } from "./winnerScreenCSS";

export default function Button() {
  return ( 
       <View style={[winnerstyles.buttonContainer]}>
          <TouchableOpacity style={winnerstyles.button}>
            <Text style={winnerstyles.buttonText}>New Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={winnerstyles.button}>
            <Text style={winnerstyles.buttonText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={winnerstyles.button}>
            <Text style={winnerstyles.buttonText}>play again</Text>
          </TouchableOpacity>
        </View>

  )
}