import React from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import AssetsListScreen from './src/screens/AssetList';

function App() {
  return (
    <SafeAreaProvider>
      <AssetsListScreen />
    </SafeAreaProvider>
  );
}

export default App;
