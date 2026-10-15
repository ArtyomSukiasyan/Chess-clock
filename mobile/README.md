# Chess Clock — mobile

React Native (Expo) wrapper that renders the [web app](../web) inside a WebView.

The web app is built and inlined into a single HTML string (`src/webApp.ts`, generated),
so the app works fully offline and runs in **Expo Go** without a custom build.

## Run

```bash
cd web && npm i        # once, the web app is built from here
cd ../mobile && npm i
npm start              # rebuilds ../web, then starts Expo — scan the QR code with Expo Go
```

`npm run bundle-web` regenerates `src/webApp.ts` manually after changing the web app.

## Live reload against the web dev server

Run `npm run dev -- --host` in `web`, then start Expo with the LAN URL:

```bash
EXPO_PUBLIC_WEB_URL=http://192.168.1.10:5173 npx expo start
```

## Notes

- The screen is kept awake while the app is open (`expo-keep-awake`).
- Saved time controls persist via the WebView's `localStorage`.
