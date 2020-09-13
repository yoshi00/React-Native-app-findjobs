import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import styles from './Styles';

export default function Login ({ navigation }){
    return (
        <View style={styles.container}>
            
            <Text style={styles.name}>FindJobs</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType={"email-address"}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />

            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.userBtn}
                >
                    <Text style={styles.btnTxt}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('signupUser')}
                    style={styles.userBtn}
                >
                    <Text style={styles.btnTxt}>SignUp</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}