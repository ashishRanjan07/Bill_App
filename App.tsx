import {LogBox, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import NoInternet from './src/screen/noInternet/NoInternet';
import Colors from './src/utils/AppColor';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './src/redux/store/Store';
import Routes from './src/navigation/Routes';

const App = () => {
  const [connected, setConnected] = useState(true);
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs(['Remote debugger']);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        {connected ? (
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        ) : (
          <NoInternet />
        )}
        <FlashMessage position={'top'} animated={true} />
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.statusBarColor,
  },
});
