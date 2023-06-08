import React, { Component } from "react";
import { View, Text, TouchableOpacity, Touchable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }

  saveData = async (data) => {
    try {
      await AsyncStorage.setItem("@datastring", JSON.stringify(data));
      console.log("Data berhasil disimpan");
    } catch (e) {
      console.log(e);
    }
  };

  getData = async () => {
    try {
      let value = await AsyncStorage.getItem("@datastring");
      value = JSON.parse(value);

      if (value !== null) {
        this.setState({ value });
      }
      console.log("data berhasil di get", value);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View>
        <Text>Simpan Data</Text>
        <TouchableOpacity onPress={() => this.saveData("hellow world")}>
          <Text>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.getData()}>
          <Text>Ambil Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
