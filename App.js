import { useState } from 'react';
import { StyleSheet, View , FlatList, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './compenents/GoalItem';
import GoalInput from './compenents/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals,setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  };

  function endGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    setCourseGoals( (currentCourseGoals) =>
      [...courseGoals, 
       {text: enteredGoalText, id: Math.random().toString()},
      ]      
      );
    endGoalHandler();
  };

  function deleteGoalHandler (id){
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal) => goal.id !== id );
    }
    );
  };

  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color='white'
        onPress={startAddGoalHandler}
      />
      
      <GoalInput 
        visible={modalIsVisible} 
        onAddGoal={addGoalHandler}
        onCancel={endGoalHandler}
      />
      {/* View to list text */}
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
            renderItem={(itemData) => {
              return (
                <GoalItem 
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                  
                />
              );
            }} 
          keyExtractor={(item,index) => {
              return item.id;
            }
          }
          alwaysBounceVertical={false} 
        />   
         
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    marginTop:32,
    paddingTop:60,
    paddingHorizontal:16,
    backgroundColor:'blue',
        
  },
  

  goalsContainer:{
    flex:5,
    
  },

});
