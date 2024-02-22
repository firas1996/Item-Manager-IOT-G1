import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import UserInput from "./Components/UserInput";
import { useState } from "react";
import UserItem from "./Components/UserItem";

export default function App() {
  const [users, setUsers] = useState([]);
  const saveUser = (data) => {
    setUsers([data, ...users]);
  };
  const deleteUser = (id) => {
    setUsers(
      users.filter((user) => {
        return user.id != id;
      })
    );
  };
  console.log(users);
  return (
    <View style={styles.container}>
      <UserInput saveUser={saveUser} />
      <View style={styles.items}>
        <FlatList
          data={users}
          renderItem={(user) => {
            // console.log(user.item);
            return (
              <UserItem
                deleteUser={deleteUser}
                name={user.item.name}
                id={user.item.id}
              />
            );
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 52,
    paddingBottom: 20,
  },
  items: {
    width: "96%",
    flex: 5,
  },
});
