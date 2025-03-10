import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity } from "react-native";
const img = require('./assets/adaptive-icon.png')
import React, { useState } from 'react';

export default function App(){
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Stylesheet API</Text> */}
            <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
                <Text>Lightblue box</Text>
            </View>
            <View style={[styles.box, styles.lightgreenBg]}>
                <Text>Lightgreen box</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'plum', padding: 60},
    box:{
        width:100,
        height: 100,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: "purple",
        borderRadius: 5
    },
    lightblueBg: {
        backgroundColor: "lightblue"
    },
    lightgreenBg: {
        backgroundColor: "lightgreen"
    },
    boxShadow: {
        shadowColor: "#333333",
        shadowOffset: {
            width: 6, height:6
        },
        shadowOpacity: 0.6,
        shadowRadius: 4
    }
})