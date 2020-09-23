import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ChatScreen extends React.Component {
    render() {
        return (
            <View style={StyleSheet.component}>
                <Text>Pantalla de mensajes</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});