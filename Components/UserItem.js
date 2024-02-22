import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const UserItem = ({ name, id, deleteUser }) => {
  const removeItem = () => {
    deleteUser(id);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.userTxt}>{name}</Text>
      <TouchableOpacity onPress={removeItem}>
        <Ionicons name="person-remove" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#b5b1b1",
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userTxt: {
    fontSize: 18,
  },
});
