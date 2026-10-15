import { StatusBar } from "expo-status-bar";
import { useKeepAwake } from "expo-keep-awake";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { webAppHtml } from "./src/webApp";

const BACKGROUND = "#f1f3fa";

// Set EXPO_PUBLIC_WEB_URL (e.g. http://192.168.1.10:5173) to load the Vite dev server instead of the bundled build
const devUrl = process.env.EXPO_PUBLIC_WEB_URL;

// A stable origin keeps localStorage (saved time controls) between launches
const source = devUrl ? { uri: devUrl } : { html: webAppHtml, baseUrl: "https://chess-clock-amber.vercel.app" };

export default function App() {
  // The screen must not dim or lock in the middle of a game
  useKeepAwake();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom", "left", "right"]}>
        <StatusBar style="dark" />
        <WebView
          style={styles.webview}
          source={source}
          originWhitelist={["*"]}
          domStorageEnabled
          bounces={false}
          overScrollMode="never"
          textZoom={100}
          setBuiltInZoomControls={false}
          allowsLinkPreview={false}
          contentInsetAdjustmentBehavior="never"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  webview: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
});
