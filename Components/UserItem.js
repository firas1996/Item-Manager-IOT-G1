import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const UserItem = ({ name, id, deleteUser, favHandler, isFav }) => {
  const removeItem = () => {
    deleteUser(id);
  };
  const toggleStar = () => {
    favHandler(id);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.userTxt}>{name}</Text>
      <View style={styles.icons}>
        <TouchableOpacity onPress={removeItem}>
          <Ionicons name="person-remove" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleStar}>
          <Ionicons
            name={isFav ? "star" : "star-outline"}
            size={28}
            color={isFav ? "yellow" : "black"}
          />
        </TouchableOpacity>
      </View>
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
    flex: 4,
  },
  icons: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
  },
});
