import React, { useState } from "react";
import { StyleSheet, View, FlatList, TextInput, Modal } from "react-native";
import {BeneficiaryCard, ConfirmButton, MyScreen} from '../../Components'
import colors from "../../constants/colors";
import NewBeneficiary from "./NewBeneficiary";

const data = [
  {
    name: "Yusuf Muhammad Dimari",
    bank: "Wema Bank",
    alias: "Gwat",
    accnumber: "0236028591",
  },
  {
    name: "BabaGoni Muhammad Dimari",
    bank: "Wema Bank",
    alias: "Babs",
    accnumber: "0236028592",
  },
  {
    name: "Sani Saidu Gamagira",
    bank: "GTBank",
    alias: "Halipa",
    accnumber: "0236013754",
  },
  {
    name: "Suwaiba Saidu Gamagira",
    bank: "Wema Bank",
    alias: "Gwat",
    accnumber: "0236013757",
  },
  {
    name: "Yusuf Muhammad Dimari",
    bank: "AlatbyWema",
    alias: "Deems",
    accnumber: "0242642143",
  },
  {
    name: "Yusuf Muhammad Dimari",
    bank: "Wema Bank",
    alias: "Gwat",
    accnumber: "0236028599",
  },
  {
    name: "BabaGoni Muhammad Dimari",
    bank: "Wema Bank",
    alias: "Babs",
    accnumber: "0236028590",
  },
];

function Beneficiaries({ navigation }) {
  const [visible, setVisible] = useState(false);
  return (
    <MyScreen>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={{ color: colors.primary, marginLeft: 10 }}
            placeholder={"Search"}
          ></TextInput>
        </View>
        <FlatList
          style={{ marginBottom: 20 }}
          data={data}
          keyExractor={(data) => {
            data.accnumber.toString();
          }}
          renderItem={({ item }) => (
            <BeneficiaryCard
              name={item.name}
              alias={item.alias}
              bank={item.bank}
              accnumber={item.accnumber}
              onPress={() => {
                navigation.replace("amount", {
                  accnumber: item.accnumber,
                  name: item.name,
                  bank: item.bank,
                });
              }}
            />
          )}
        />
        <ConfirmButton
          title={"New Beneficiary"}
          onPress={() => {
            setVisible(true);
          }}
        />
      </View>
      <Modal visible={visible} animationType="slide">
        <NewBeneficiary
          onSubmit={(values) => {
            if (values.pin == 1234) {
              data.push({
                name: values.name,
                accnumber: values.accnumber,
                bank: values.bank,
                alias: values.alias,
              });
              setVisible(false);
            } else {
              alert("incorrect Pin");
            }
          }}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </Modal>
    </MyScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    maxHeight: "90%",
    width: "90%",
    backgroundColor: colors.background,
    alignSelf: "center",
    marginVertical: 20,
    elevation: 5,
    borderRadius: 30,
    padding: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  searchContainer: {
    width: "90%",
    padding: 10,
    elevation: 5,
    backgroundColor: colors.secondary,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
  modalContainer: {
    width: "90%",
    backgroundColor: colors.background,
    // alignSelf: "center",
    marginVertical: 20,
    elevation: 5,
    borderRadius: 30,
    padding: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default Beneficiaries;
