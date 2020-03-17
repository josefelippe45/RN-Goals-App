import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
const GoalItem = props => {
    return ( //the bind pass the id to onDelete when it's getting called upon onPress
        <TouchableNativeFeedback onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.lstItem}>
                <Text >{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};
const styles = StyleSheet.create
    ({
        lstItem:
        {
            padding: 10,//space between the content and the border
            margin: 10,//space between each component
            backgroundColor: '#ccc',
            borderColor: 'black',
            borderWidth: 1
        }
    });
export default GoalItem;