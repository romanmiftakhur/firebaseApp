import { View, Text, Alert, FlatList } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { Button, Card, Input } from '../components';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Home: FC = (props) => {

    const [ name, setName] = useState<string | null>(null);
    const ref = firestore().collection('users');
    const [ user, setUser] = useState([]);
    const [ loading, setLoading] = useState<boolean>(true);

    const handleSignOut = async() => {
        await auth().signOut();
    }

    useEffect(() => {
        return ref.onSnapshot(querySnapshot => {
            const list = [];

            querySnapshot.forEach(doc => {
                const { name, complete} = doc.data();
                list.push({
                    id: doc.id,
                    name,
                    complete
                });
            });
            setUser(list);

            if(loading) {
                setLoading(false);
            }
        })
    },[])

    const handlePost = async() => {
        await ref.add({
            name: name,
            complete: false
        });
        setName('');
    } 

    return (
        <View>
            <View>
                <Input placeholder='name' onChangeText={(value) => setName(value)} keyboardType='default' maxLength={225}/>
                <Button title='Post' onPress={handlePost}/>
            </View>
            <View>
                <FlatList
                    data={user}
                    renderItem={({item}) => (
                        <Text>{...item}</Text>
                    )}

                />
            </View>
            <View style={{ marginVertical: 10}}>
                <Button title="Sign Out" onPress={handleSignOut} />
            </View>
        </View>
    )
};

export default Home;