import { FlutterReactNative, ReactModule } from 'flutter-react-native';

ReactModule.define("increment", async (params) => {
    // Uncomment code below to test calling flutter logic
    FlutterReactNative.call("increment", { value: params.value }, (value) => {
        console.log("Result of increment from flutter : " + value);
    })

    return params.value + 1;
})