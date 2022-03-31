import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { Spinner} from '../components';
import { AuthStack, HomeStack } from './AppStack';

interface Props{}

const MainTab = () => {

    const [ user, setUser] = useState<any>(null);
    const [ initializing, setInitialzing] = useState<boolean>(true);
    const [ isLoading, setIsLoading] = useState<boolean>(true)

    const onAuthStateChange = (user: any) => {
        setUser(user);
        if( initializing) setInitialzing(false);
        setIsLoading(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChange);
        return subscriber;
    },[])

    if( isLoading) {
        return <Spinner/>
    };


    return (
        <NavigationContainer>
            { user !==  null ? <HomeStack /> : <AuthStack/> }
        </NavigationContainer>
    )


};

export default MainTab;