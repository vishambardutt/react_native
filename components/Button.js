import { Pressable, Text } from "react-native";
export default function Btn(props) {
      const { onPress, title = 'SAVE' } = props;
      return (
        <Pressable style={External.button} onPress={onPress}>
          <Text style={External.text}>{title}</Text>
        </Pressable>
      );
    }
    