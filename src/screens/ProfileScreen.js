import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles';

const ProfileScreen = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Welcome to the Profile Screen</Text>
        </View>
    );
}

export default ProfileScreen;