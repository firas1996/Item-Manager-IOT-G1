import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import UserItem from "../UserItem";

const FavUsers = ({ route }) => {
  const favData = route.params.favs;
  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <FlatList
          data={favData}
          renderItem={(user) => {
            // console.log(user.item);
            return (
              <UserItem
                favHandler={route.params.favHandler}
                deleteUser={route.params.deleteUser}
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

export default FavUsers;

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
