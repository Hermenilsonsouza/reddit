import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const Details = (props: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{uri: props.route.params?.item}} />
    </SafeAreaView>
  );
};

export default Details;
