import React from 'react';
import { SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';

import logo from '../assets/logo.png';

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
            <View />
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
});