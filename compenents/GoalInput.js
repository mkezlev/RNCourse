import { useState } from "react";
import { View,TextInput,Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) { 
    const [enteredGoalText, setEnteredGoalText] = useState ('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
        
    };

    return (
    /* View 1 to enter text */
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>  
      <Image style={styles.image} source={require('../assets/goal.png')}/>  
        <TextInput 
            style={styles.TextInput} 
            placeholder ='Your Goal!' 
            onChangeText={goalInputHandler}
            value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title='Cancel' onPress={props.onCancel}  color='#f31282'/>
            </View>
            <View style={styles.button}>
                <Button title='Add Goal' onPress={addGoalHandler} color='green'/>
            </View>
        </View>

    </View>
    </Modal>
    );
};
export default GoalInput;
const styles = StyleSheet.create({
inputContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'top',
    alignItems: 'center',
    padding:16,
    backgroundColor:'#311b6b',
     
},

image: {
width:100,
height:100,
margin:20,

},

TextInput: {
    borderWidth:1,
    borderColor:'#e4d0ff',
    borderRadius:6,
    backgroundColor:'#e4d0ff',
    color:'#120438',
    width:'100%',
    padding:16,
    marginTop:32,
},
  buttonContainer: {
    flexDirection: 'row',
    marginTop:8,

  },
  button: {
    width: 100,
    marginHorizontal:8,
  },
});