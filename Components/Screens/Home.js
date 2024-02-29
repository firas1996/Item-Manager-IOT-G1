import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import UserItem from "../UserItem";
import UserInput from "../UserInput";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
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
  const favHandler = (id) => {
    setUsers(
      users.map((user) => {
        return user.id == id ? { ...user, isFav: !user.isFav } : user;
      })
    );
  };
  console.log(users);
  const navToFav = () => {
    navigation.navigate("Fav");
  };
  return (
    <View style={styles.container}>
      <UserInput saveUser={saveUser} />
      <Button title="Go TO FavUsers" onPress={navToFav} />
      <View style={styles.items}>
        <FlatList
          data={users}
          renderItem={(user) => {
            // console.log(user.item);
            return (
              <UserItem
                favHandler={favHandler}
                deleteUser={deleteUser}
                name={user.item.name}
                id={user.item.id}
                isFav={user.item.isFav}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

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
