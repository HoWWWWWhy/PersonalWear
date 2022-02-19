import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export const Home = () => {
  return (
    <>
      <WebView
        source={{uri: 'https://flamboyant-murdock-759aec.netlify.app/'}}
      />
    </>
  );
};

export default Home;
