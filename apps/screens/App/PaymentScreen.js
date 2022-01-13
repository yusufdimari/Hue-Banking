import React from "react";
import { View } from "react-native";
import { Paystack } from "react-native-paystack-webview";
import firebase from "../../Firebase/firebase";
let uid;
import MyScreen from "../../Components/MyScreen";
function PaymentScreen({ navigation, route }) {
  firebase.auth().onAuthStateChanged((user) => {
    uid = user.uid;
  });
  return (
    <MyScreen>
      <Paystack
        paystackKey="pk_test_facd3b698df639e4a7046f8323fec457173ea332"
        amount={route.params.amount}
        billingEmail={route.params.email}
        activityIndicatorColor="blue"
        onCancel={(e) => {
          // handle response here
          navigation.replace("amount");
          console.log(e);
        }}
        onSuccess={(res) => {
          // handle response here
          console.log(res);
          const data = res.transactionRef;
          firebase
            .firestore()
            .collection(uid)
            .doc("transactions")
            .collection("Transactions")
            .add({
              status: res.status,
              amount: route.params.amount,
              reference: data.reference,
              description: route.params.description,
              name: route.params.email,
            });
          navigation.replace("dashboard");
        }}
        autoStart={true}
      />
    </MyScreen>
  );
}

export default PaymentScreen;
