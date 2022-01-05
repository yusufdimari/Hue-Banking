import firebase from "../../Firebase/firebase";
function LogoutScreen({ navigation }) {
  firebase
    .auth()
    .signOut()
    .then(() => navigation.replace("login"))
    .catch((error) => {
      alert(error);
    });
  return null;
}
export default LogoutScreen;
