import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Container, Content, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { Header } from 'react-native/Libraries/NewAppScreen';
export default function App() {
  const [isReady, setisReady] = useState(false)
  useEffect(() => {
    (
      async () => {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        setisReady(true)
      }
    )();
  }, [])

  if (!isReady) {
    <Text>Loading...</Text>
  }
  return (
    <WebView source={{ uri: 'https://instamobile.io/blog' }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
