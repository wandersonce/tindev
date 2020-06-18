import React from 'react';
import { SafeAreaView, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';

export default function Main() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.cardContainer}>
                <View style={[styles.card, { zIndex: 3 }]} >
                    <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4' }} />
                    <View style={styles.footer}>
                        <Text style={styles.name}> Wanderson Castro</Text>
                        <Text style={styles.bio} numberOfLines={3}> CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</Text>
                    </View>
                </View>

                <View style={[styles.card, { zIndex: 2 }]} >
                    <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4' }} />
                    <View style={styles.footer}>
                        <Text style={styles.name}> Wanderson Castro</Text>
                        <Text style={styles.bio} numberOfLines={3}> CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</Text>
                    </View>
                </View>

                <View style={[styles.card, { zIndex: 1 }]} >
                    <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4' }} />
                    <View style={styles.footer}>
                        <Text style={styles.name}> Wanderson Castro</Text>
                        <Text style={styles.bio} numberOfLines={3}> CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</Text>
                    </View>
                </View>
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