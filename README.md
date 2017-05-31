# Cog React Native
A mobile app implementation of the Cog front end using React Native

## Authors
* Kyle Herock
* Lihan Zhang

## Running the App
To start the React Native packager, run
```
$ npm start
```

### Android
You'll need a working copy of the [Android SDK command-line tools](https://developer.android.com/studio/index.html#downloads)
installed and available in your PATH. An installation of Android Studio 
(or IntelliJ) is also recommended for developing on Android.

In the SDK manager, install the latest Platform-tools, Android SDK Build-tools
`23.0.1`, the Android Support Repository, and the Google USB Driver. Also
install the targeted SDK Platform (currently API 23). If developing with an
emulated device, install an emulator image and (if on an Intel CPU) the Intel
HAXM accelerator to allow for CPU virtualization.

Lastly, you also need to point the environmental variable `ANDROID_HOME` to the
SDK root. Then you can build and install the app:
```
$ npm run android
```

### iOS
I don't have a macOS setup, but I know you probably run this:
```
$ npm run ios
```