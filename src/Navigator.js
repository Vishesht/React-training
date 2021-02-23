import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Home from './Screens/Home';
import Notification from './Screens/Notification';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function MyStack(props) {
    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Home} options={{
                headerLeft: () => (
                    <Icon name="align-justify" onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())} size={20} backgroundColor={"white"} color={"black"} style={{ marginLeft: 10 }} />
                )
            }} />
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    )
}

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContentOptions={{

                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 5 },
                initialRouteName: "Stack"
            }}>
            <Drawer.Screen name="Stack" component={MyStack} options={{
                drawerIcon: ({}) => (
                    <Image
                        source={require('./assets/react1.png')}
                        style={{width:20,height:20}}
                    />)
            }} />
            <Drawer.Screen name="Notifications" component={Notification} />
        </Drawer.Navigator>
    );
}

const AppContainer = props => {

    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
};

export default AppContainer;