import React, { Component } from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

function Headers(props) {
    console.log("props===>",props)
    return (
        <SafeAreaView style={{ backgroundColor: "#fff" }}>
            <View style={{ height: 44, backgroundColor: "#fff" }}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flex:1,justifyContent: 'center'}}>
                            
                            <Icon name="align-justify"  size={20} backgroundColor = {"white"} color={"black"} style={{ marginLeft: 10 }} />  
        
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{fontSize:20,fontWeight: 'bold'}}>React App</Text>
                        </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Headers;