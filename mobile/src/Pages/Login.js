import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [user, setUser] = useState('');

    function handleLogin() {
        console.log(user);

        navigation.navigate('Main');
    }
    return (
        <KeyboardAvoidingView //! this will work only for IOS. The keyboard won't cover the view.
            behavior="padding"
            enabled={Platform.OS === 'ios'}
            style={styles.container}
        >
            <Image source={logo} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholderTextColor="#999"
                placeholder="Insert your Github user"
                value={user}
                onChangeText={setUser}
            />

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: "#df4723",
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 16,
    },
})