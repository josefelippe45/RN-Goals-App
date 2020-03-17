import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal
} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.txtInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color='red' onPress={props.onCancel} />
                    </View>

                </View>

            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    inputContainer:
    {
        flex: 1,//flex allows us to control how much space your differents itens inside of a flexbox take,
        //so it will take the full available space 
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtInput:
    {
        fontSize: 16,
        padding: 10,
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    buttonContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button:
    {
        width: '40%'
    }

})
export default GoalInput;