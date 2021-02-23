import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Headers from "./common/Headers";

function Notification(props) {
    return (
        <View style={{flex:1}}>
            <Headers props={props} />
        </View>
    );
}

export default Notification;