import React from "react";
import { Text, View } from "react-native";
import Student from "./Student";
import External from "../External";

class Teacher extends React.Component {
      render(){
            return(
                  <View>
                        <Text style={External.heading}>Second Class Example</Text>
                        <Student name={this.props.name} />
                  </View>
            )
      }
}
export default Teacher;
