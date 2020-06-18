import React, { useEffect, useState } from 'react';
import { SafeAreaView, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';

export default function Main({ navigation }) {
    const id = navigation.getParam('user');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('devs', { //! The second parameter on a get request will be the headers
                headers: {
                    user: id
                },
            })

            setUsers(response.data);
        }
        loadUsers();
    }, [id]) // * Everytime that the params id be changed the function will be executed.

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {  //! The second parameter on a post request is always a body, and the third one will be the headers
            headers: { user: id },
        })

        setUsers(users.filter(user => user._id !== id));
    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {  //! The second parameter on a post request is always a body, and the third one will be the headers
            headers: { user: id },
        })

        setUsers(users.filter(user => user._id !== id));
    }


    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.cardContainer}>
                {user.map((user, index) => (
                    <View key={user._id} style={[styles.card, { zIndex: user.length - index }]} >
                        <Image style={styles.avatar} source={{ uri: user.avatar }} />
                        <View style={styles.footer}>
                            <Text style={styles.name}> {user.name}</Text>
                            <Text style={styles.bio} numberOfLines={3}> {user.bio}</Text>
                        </View>
                    </View>
                ))}
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={like} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={dislike} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500,
    },
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    avatar: {
        flex: 1,
        height: 300
    },
    footer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18
    },
    logo: {
        marginTop: 30
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 30
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,

        //* For android devices you must use only elevation to apply shadows
        elevation: 2,

        //* For Ios mobile you must specify everything
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
});