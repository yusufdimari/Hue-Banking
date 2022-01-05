import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { CardComponent, MyScreen, RoundComponent } from "../../Components";
import colors from "../../constants/colors";
import firebase from "../../Firebase/firebase";

let displayEmail;
let uid;

// const ref = doc(db, user.uid, "chevron");

function Dashboard({ navigation }) {
  const [icon, setIcon] = useState("eye-off-outline");
  const [history, setHistory] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // if (user) {
      uid = user.uid;
      fire(uid);
      console.log(uid);
      // }
    });
  }, []);

  const fire = (uid) => {
    const trans = [];
    firebase
      .firestore()
      .collection(uid)
      .doc("details")
      .onSnapshot((snapshot) => {
        setDetails(snapshot.data());
      });
    firebase
      .firestore()
      .collection(uid)
      .doc("transactions")
      .collection("Transactions")
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          trans.push(doc.data());
        });
        setHistory(trans);
      });
  };

  return (
    <MyScreen style={styles.container}>
      <View style={styles.cardContainer}>
        <CardComponent
          accname={details.name}
          accnumber={"0236028591"}
          balance={icon == "eye-outline" ? details.balance : "****"}
          iconName={icon}
          onPress={() => {
            icon == "eye-outline"
              ? setIcon("eye-off-outline")
              : setIcon("eye-outline");
          }}
        />
      </View>
      <View style={styles.roundedContainer}>
        <RoundComponent
          description={"Bank Transfer"}
          icon={"bank-transfer"}
          onPress={() => {
            navigation.navigate("transfer");
          }}
        />
        <RoundComponent
          description={"Airtime"}
          icon={"phone-forward-outline"}
        />
        <RoundComponent
          description={"Beneficiaries"}
          icon={"format-list-bulleted"}
          onPress={() => {
            navigation.navigate("beneficiaries");
          }}
        />
      </View>
      <View style={styles.history}>
        <Text style={styles.historyTitle}>Transfer History</Text>
        <FlatList
          data={history}
          keyExtractor={(data) => {
            data.date.toString();
          }}
          renderItem={({ item }) => (
            <>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.amount}</Text>
                {/* <Text>{item.date.toDateString()}</Text> */}
              </View>
            </>
          )}
        />
      </View>
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  // container: { flex: 1, backgroundColor: "#a7dbd3" },
  cardContainer: {
    margin: 20,
  },
  roundedContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  history: {
    alignSelf: "center",
    flex: 1,
    width: "90%",
    marginBottom: 10,
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
  },
  historyTitle: {
    color: colors.secondary,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Dashboard;