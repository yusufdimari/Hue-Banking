import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../constants/colors";

const banks = "https://api.paystack.co/bank";
function BankList({ setModalVisible, onSelectItem }) {
  useEffect(() => {
    fetch(banks)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setArray(json.data);
      })
      .catch((error) => alert(error))
      .finally(console.log("done"));
  }, []);

  const [data, setData] = useState([]);
  const [array, setArray] = useState([]);
  function searchTable(data, input) {
    const filteredData = [];
    for (var i = 0; i < data.length; i++) {
      var bank = data[i].name.toLowerCase();
      if (bank.includes(input.toLowerCase())) {
        filteredData.push(data[i]);
      }
    }
    setArray(filteredData);
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            searchTable(data, text);
          }}
        ></TextInput>
        <MaterialCommunityIcons
          name="text-search"
          color={colors.white}
          size={20}
        />
      </View>
      <FlatList
        data={array}
        keyExtractor={(array) => array.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // onSelectItem(item);
              setModalVisible;
            }}
            style={styles.bank}
          >
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    maxHeight: "80%",
    width: "90%",
    backgroundColor: colors.background,
    alignSelf: "center",
    marginVertical: 20,
    borderRadius: 30,
    padding: 10,
  },
  bank: {
    width: "90%",
    backgroundColor: colors.background,
    alignSelf: "center",
    marginBottom: 20,
    elevation: 5,
    borderRadius: 30,
    padding: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    textAlign: "center",
  },
  searchContainer: {
    width: "90%",
    padding: 15,
    elevation: 5,
    backgroundColor: colors.secondary,
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    color: colors.white,
    textAlign: "center",
  },
});

export default BankList;
