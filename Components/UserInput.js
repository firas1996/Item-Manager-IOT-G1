import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const UserInput = ({ saveUser }) => {
  const [impData, setImpData] = useState("");
  const addUser = () => {
    if (impData != "") {
      saveUser({ id: Math.random(), name: impData, isFav: false });
      setImpData("");
    }
  };
  return (
    <View style={styles.viewInput}>
      <TextInput style={styles.imp} value={impData} onChangeText={setImpData} />
      <Pressable style={styles.btn} onPress={addUser}>
        <Text style={styles.btnTXT}>ADD</Text>
      </Pressable>
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  viewInput: {
    width: "96%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  imp: {
    borderWidth: 2,
    height: 42,
    borderColor: "#aaa",
    borderRadius: 8,
    flex: 3,
    marginRight: 8,
  },
  btn: {
    flex: 1,
    backgroundColor: "#4504d1",
    height: 42,
    marginLeft: 8,
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  btnTXT: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
