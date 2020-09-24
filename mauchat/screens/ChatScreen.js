import React from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from '../Fire';



export default class ChatScreen extends React.Component {
    // Estado
    state = {
        messages: []
    }

    // Cojemos el usuario que esta hablando
    get user() {
        return {
            _id: Fire.uid,
            name: this.props.navigation.state.params.name
        }
    }

    componentDidMount() {
        Fire.get(message =>
            this.setState(previous => ({
                messages: GiftedChat.append(previous.messages, message)
            }))
        );
    }

    componentWillUnmount() {
        // Nos desconectamos
        Fire.off();
    }

    render() {
        // Chat = a un modulo muy interesante
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />;
        
        if (Platform.OS === 'android') {
            // Si es android donde estan
            return (
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={30} enabled>
                    {chat}
                </KeyboardAvoidingView>
            )
        }
        return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
    }
}

const styles = StyleSheet.create({
    // Estilos
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7",
        justifyContent: "center",
        alignItems: "center"
    },
});