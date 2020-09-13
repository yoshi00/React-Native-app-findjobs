import React from 'react';
import { View, Text, TextInput, Alert, ScrollView } from 'react-native';
import styles from './Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CadastrarUsuario extends React.Component  {

    state = {
        name: '',
        age: '',
        freenlancer: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

     verificaCampos() {
        let resp = true;

        for (const key in this.state) {
            if (!this.state[key]) {
                resp = false;
            }
        }
        return resp;
    }

     validarEmail(text) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            return false;
        }

        return true;
    }

    cadastrar() {
        if (!this.verificaCampos()) return Alert.alert('Please fill in required fields!');

        const { password, confirmPassword, email } = this.state;

        if (password !== confirmPassword) {
            return Alert.alert("The password don't match, please enter the password again");
        }

        if (!this.validarEmail(email)) return Alert.alert('Email inavlid, please enter a new email.')

        Alert.alert('Registered User!')
    }

    render(){
        return (
            <>
                <View style={styles.container}>
                    <ScrollView>
                            <View style={{ margin: 20 }} >
                                {/* <Text style={styles.label}>Nome</Text> */}
                                <TextInput
                                    style={styles.input}
                                    value={this.state.nome}
                                    onChangeText={name => this.setState({ name })}
                                    placeholder="Fullname"
                                    autoCapitalize={"words"}
                                />

                                {/* <Text style={styles.label}>Idade</Text> */}
                                <TextInput
                                    style={styles.input}
                                    value={this.state.age}
                                    onChangeText={age => this.setState({ age })}
                                    placeholder="Age"
                                    keyboardType={"number-pad"}
                                    maxLength={2}
                                />

                                {/* <Text style={styles.label}>Freenlancer</Text> */}
                                <TextInput
                                    style={styles.input}
                                    value={this.state.freenlancer}
                                    onChangeText={freenlancer => this.setState({ freenlancer })}
                                    placeholder="Freenlacer"
                                />

                                {/* <Text style={styles.label}>Email</Text> */}
                                <TextInput
                                    style={styles.input}
                                    value={this.state.email}
                                    onChangeText={email => this.setState({ email })}
                                    placeholder="Email"
                                    autoCapitalize={"none"}
                                    keyboardType={"email-address"}
                                />

                                {/* <Text style={styles.label}>Senha</Text> */}
                                <TextInput
                                    style={styles.input}
                                    value={this.state.password}
                                    onChangeText={password => this.setState({ password })}
                                    placeholder="Password"
                                    autoCapitalize={"none"}
                                    secureTextEntry
                                />

                                {/* <Text style={styles.label}>Confirmar senha</Text> */}
                                <TextInput
                                    style={styles.input}
                                    value={this.state.confirmPassword}
                                    onChangeText={confirmPassword => this.setState({ confirmPassword })}
                                    placeholder="Confirm Password"
                                    autoCapitalize={"none"}
                                    secureTextEntry
                                />

                                <View style={styles.buttonSignUpContainer}>
                                    <TouchableOpacity
                                       style={styles.buttonSignUpContainer}
                                       onPress={() => {this.cadastrar} } 
                                    >
                                        <Text style={styles.btnSignUp}>SingUp</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                </View>
            </>
        );
    }
}