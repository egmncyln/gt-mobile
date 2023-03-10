import { StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'default'} />
      <WebView source={{ uri: 'http://10.0.2.2:3000/' }} />
    </>
  );
}
