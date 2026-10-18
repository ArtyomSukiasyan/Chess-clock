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

## Deploy to Google Play

The app is linked to the EAS project `@chess_arbiter/chess-clock` (package `com.chess_arbiter.chessclock`).
The web app is rebuilt on the EAS server by the `eas-build-post-install` hook, so `src/webApp.ts` doesn't need to be committed.

```bash
npm run build:android    # production .aab on EAS; versionCode is auto-incremented
npm run submit:android   # uploads the latest build to Google Play (internal track)
```

First release only:

1. On the first `build:android`, let EAS generate and store the Android keystore.
2. Create the app in Google Play Console and upload that first `.aab` manually — Google doesn't allow API uploads for a brand-new app.
3. For `submit:android`, add a Google service account key in the EAS dashboard
   (Project → Credentials → Android → Google Service Account Key). See https://docs.expo.dev/submit/android/.

Bump `version` in `app.json` for each new store release.
