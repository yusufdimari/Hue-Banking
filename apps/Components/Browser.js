import React from "react";
import WebView from "react-native-webview";
import { View } from "react-native";

function Browser({ route }) {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: route.params.uri }} style={{ flex: 1 }} />
    </View>
  );
}

export default Browser;
