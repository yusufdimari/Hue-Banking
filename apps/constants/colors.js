// // import firebase from "../Firebase/firebase";
// // // console.log(colors, "colors");
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
const gray = {
  primary: "#999999",
  secondary: "black",
  background: "#c2c2c2",
  white: "white",
  black: "black",
  danger: "red",
  img: require("../assets/logo-grey.png"),
  text: "black",
  normal: "#a7dbd3",
};
const normal = {
  primary: "#EDF9F6",
  secondary: "#0C3D33",
  background: " ",
  white: "white",
  black: "black",
  danger: "red",
  img: require("../assets/logo.png"),
  gray: "#c2c2c2",
  text: "black",
  normal: "#a7dbd3",
};
const red = {
  primary: "#3d0602",
  secondary: "white",
  background: "#5c0600",
  white: "white",
  black: "black",
  danger: "red",
  gray: "#c2c2c2",
  text: "white",
  img: require("../assets/logo.png"),
  normal: "#a7dbd3",
};

function Colors(props) {
  const getTheme = () => {
    try {
      AsyncStorage.getItem("theme").then((value) => {
        if (value == "Gray") {
          setMyColors(gray);
        } else if (value == "Normal") {
          setMyColors(normal);
        } else if (value == "Reddish") {
          setMyColors(red);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getTheme();
  }, []);
  setInterval(getTheme, 1000);
  const [myColors, setMyColors] = useState(normal);
  return myColors;
}

export default Colors;

// // function Colors(props) {
// // import React, { useState, useEffect } from "react";
// let Colors = {};
// const getTheme = () => {
//   try {
//     AsyncStorage.getItem("theme").then((value) => {
//       if (value == "Gray") {
//         Colors = {
//           primary: "#999999",
//           secondary: "black",
//           background: "#c2c2c2",
//           white: "white",
//           black: "black",
//           danger: "red",
//         };
//       } else {
//         Colors = {
//           primary: "#EDF9F6",
//           secondary: "#0C3D33",
//           background: "#a7dbd3",
//           white: "white",
//           black: "black",
//           danger: "red",
//         };
//       }
//       console.log(Colors);
//       console.log("gotten", value);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };
// getTheme();
// console.log(Colors);
// export default Colors;

// // const [myColors, setMyColors] = useState(normal);
// // const [theme, setTheme] = useState("Normal");
// // useEffect(() => {
// // }, []);
// // return Colors;
// // }

// // getTheme();
// // export default {
// //   primary: "#999999",
// //   secondary: "black",
// //   background: "#c2c2c2",
// //   white: "white",
// //   black: "black",
// //   danger: "red",
// // };
