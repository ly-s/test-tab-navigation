import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles';

const HomeScreen = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Welcome to the Home Screen</Text>
        </View>
    );
}

export default HomeScreen;