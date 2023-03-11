import { useRef } from 'react';
import { StatusBar, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webViewRef = useRef();

  function onMessage(message) {
    Alert.alert(`The Page at "React Native" says:`, message.nativeEvent.data, [
      {
        onPress: () => webViewRef.current.injectJavaScript(`alert('${message.nativeEvent.data}')`),
      },
    ]);
  }

  return (
    <>
      <StatusBar barStyle={'default'} />
      <WebView ref={webViewRef} onMessage={onMessage} source={{ uri: 'http://10.0.2.2:3000/' }} />
    </>
  );
}
