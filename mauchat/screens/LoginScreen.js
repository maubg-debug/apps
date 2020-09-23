import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default class LoginScreen extends React.Component {

    state = {
        name: ""
    }

    continue = () => {
        this.props.navigation("Chat", {name: this.state.name})
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <View style={tyle.circle} />
                <View style={{marginTop: 64}}>
                    <Image 
                        source={require('../assets/Chat.png')} 
                        style={{width: 100, height: 100, alignSelf: "center"}}
                    />
                </View>
                <View style={styles.header}>Nombre de usuario</View>
                <TextInput 
                    style={styles.input} 
                    placeholder="Nombre..." 
                    onChangeText={name => { this.setState({name})} } 
                    value={this.state.name}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7"
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: '#FFF',
        position: "absolute",
        left: -120,
        top: -20
    },
    header: {
        fontWeight: "800",
        fontSize: 30,
        color: "#514E5A",
        marginTop: 32
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight: "600"
    }
});