import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles';

const SettingsScreen = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Welcome to the Settings Screen</Text>
        </View>
    );
}

export default SettingsScreen;