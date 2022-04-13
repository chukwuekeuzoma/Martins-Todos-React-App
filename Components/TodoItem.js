import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <AntDesign name="delete" size={15} color="black" onPress={() => pressHandler(item.key)}/>
        <Text style={styles.itemMargin}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection:"row",
    alignItems: "center",
  },

  itemMargin:{
    marginLeft:20
  }
});
