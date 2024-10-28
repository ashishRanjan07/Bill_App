import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Colors from './AppColor';

const WrapperContainer = ({
  children,
  statusBarColor = Colors.white,
  style = {},
  statusBar = true,
}) => {
  const [barStyle, setBarStyle] = useState('');
  return (
    <>
      {statusBar ? (
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: statusBarColor,
          }}>
          <StatusBar backgroundColor={statusBarColor} barStyle={"dark-content"} />
          <View
            style={{
              flex: 1,
              backgroundColor: statusBarColor,
            }}>
            {children}
          </View>
        </SafeAreaView>
      ) : (
        <>
          <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
          <View style={style}>{children}</View>
        </>
      )}
    </>
  );
};

export default React.memo(WrapperContainer);
