import { StatusBar } from "expo-status-bar";
import { useKeepAwake } from "expo-keep-awake";
import { NavigationBar } from "expo-navigation-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { webAppHtml } from "./src/webApp";

const BACKGROUND = "#f1f3fa";
const PRIMARY = "#1a1146";

// Set EXPO_PUBLIC_WEB_URL (e.g. http://192.168.1.10:5173) to load the Vite dev server instead of the bundled build
const devUrl = process.env.EXPO_PUBLIC_WEB_URL;

// A stable origin keeps localStorage (saved time controls) between launches
const source = devUrl ? { uri: devUrl } : { html: webAppHtml, baseUrl: "https://chess-clock-amber.vercel.app" };

function Screen() {
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar style="dark" />
      {/* Light buttons on a dark strip stay readable whatever the page shows above them */}
      <NavigationBar style="light" />
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
      {/* Sits behind the system navigation bar so the page never goes under its buttons */}
      <View style={[styles.navigationBarStrip, { height: bottom }]} />
    </SafeAreaView>
  );
}

export default function App() {
  // The screen must not dim or lock in the middle of a game
  useKeepAwake();

  return (
    <SafeAreaProvider>
      <Screen />
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
  navigationBarStrip: {
    backgroundColor: PRIMARY,
  },
});
