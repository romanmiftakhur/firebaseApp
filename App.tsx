import React from 'react';
import MainTab from './src/navigation/MainTab';
import { LogBox } from 'react-native';
import Home  from './src/screens/Home';
import AuthProvider from './src/navigation/AuthProvider';


const App = () => {
    LogBox.ignoreLogs([
        "[react-native-gesture-handler] Seems like you\'re usiViewng an old API with gesture components, check out new Gestures system!",
    ]);
    return(
        <MainTab />
    );
};

export default App;