import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  //this const will deal with an array to manage the input goals.
  const [courseGoals, setCourseGoals] = useState([]);
  //this const will deal with the mode of the app, if it's available of adding a new goal or not
  const [isAddMode, setIsAddMode] = useState(false);
  //this is a function that will deal with the bind of the entered goal and the text input
  //addGoalHandler recieves an argument 'goalTitle'(it can be whatever name) and stores it as a value
  const addGoalHandler = goalTitle => {
    /**the '...' takes my old array to a new array it's called spread operator.
     * because teh flatlist automatically creates a key to our itens in the array
     * we need to set the key object and then put a value wich is our enteredGoal.
    */
    setCourseGoals(courseGoals =>
      [
        ...courseGoals,
        { id: Math.random().toString(), value: goalTitle }
      ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    //getting the current course goals and returning the new updated array of goals.
    setCourseGoals(courseGoals => {
      /** .filter() always returns a new array wich is base on the old array called filtered
      *by a certain criteria. the filter gets the goal causes it runs on every element
      *of the array that we are calling.
      *we will only keep the id of the elements that are different of the one that we want to
      *delete */
      return courseGoals.filter((goal) => goal.id !== goalId);
    });
  }
  const cancelAdditionGoalHandler = () => {
    setIsAddMode(false);
  }
  return (
    /**starting from scratch
      view is like a <div> in web dev.
    */
    //here we pass the argument styles.screen to capture the style we just created.
    //we should be able to find out when a button is pressed on the component <GoalInput>
    //onAddGoal will be seen as a prop in GoalInput so we can change it on the GoalInput file
    <View style={styles.screen}>
      <Button title="Add New Goal!" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelAdditionGoalHandler}
      />
      <FlatList

        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
/**creating a stylesheet, using a JS object*/
const styles = StyleSheet.create({
  /**then we use another JS object, it can be named whatever you want*/
  screen:
  {
    padding: 50
  }
});
