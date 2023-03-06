import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import Main from './Navigators/Main';

import AuthContextProvider from './Store/Context';

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
