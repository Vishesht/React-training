import React, { useState } from 'react';
import { View, Text, Button, Image, ActivityIndicator, Pressable, ScrollView, StatusBar, Switch, TextInput, TouchableHighlight } from 'react-native';

import Modal from 'react-native-modal';
import List from './listview'

var isEnabled = false;
var toggleSwitch = true;

function Home(navigation) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <ScrollView>
            <View style={{flex: 1}}>
        <Button title="Show modal" onPress={toggleModal} />

        <Modal isVisible={isModalVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>

            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
            <StatusBar
                animated={true}
                backgroundColor="red"
                barStyle='dark-content'
                showHideTransition='fade'
                hidden={false}
            />

            <View style={{ padding: 20, flex: 1, justifyContent: 'flex-start', alignItems: "flex-start", flexDirection: 'column' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, marginLeft: 100 }}>React Native</Text>
                </View>
                <View>
                    {/* <Image source={require()} /> */}
                    <Pressable onPress={null}>
                        <Image source={require('../assets/react1.png')} style={{ height: 200, width: 250, resizeMode: 'stretch', }} ></Image>

                    </Pressable>
                </View>
            
                <View style={{ padding: 20 }}>
                    <Button
                        onPress={null}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View style={{ padding: 30 }}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
                <View>
                    <Pressable onPress={toggleModal}>
                        <Image source={require('../assets/react1.png')} style={{ height: 200, width: 250, resizeMode: 'stretch', }} ></Image>

                    </Pressable>
                </View>
            
                    <Image source={require('../assets/react1.png')} style={{ height: 100, width: 150, marginTop: 20, resizeMode: 'stretch', }} ></Image>
                <View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        //onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View>
                    <Text> {toggleSwitch ? "hello" : "bye"} </Text>
                </View>
                <View>
                    <TextInput
                        style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1 }}
                        //onChangeText={text => onChangeText(text)}
                        value="Enter your name"

                    />
                </View>
                
                <View style={{padding:20}}>
                    <List />
                </View>
            </View>
        </ScrollView>

    );
}

export default Home;