import React from "react";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import { Icon } from "native-base";

export default class AddMediaTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-add-circle" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>ADD MEDIA TAB</Text>
        <Text>This is not coded</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    }),
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
