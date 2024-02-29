import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import UserItem from "../UserItem";
import UserInput from "../UserInput";

const Home = () => {
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
  return (
    <>
      <UserInput saveUser={saveUser} />
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
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  items: {
    width: "96%",
    flex: 5,
  },
});
