import {StyleSheet, View, Text, Pressable} from 'react-native';
function GoalItem(props) {
    return (
         /* view to wrap text for IOS borderstyle*/
         <View style={styles.goalItem} > 
        <Pressable 
        android_ripple={{color: 'red'}} 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.preesedItem} 
        >
            <Text style={styles.goalText}> {props.text}  </Text>
            
        </Pressable>  
        </View>           
    );
};
export default GoalItem;

const styles = StyleSheet.create({
    
    goalItem: {
      margin:8,
      borderRadius: 6,
      backgroundColor: 'purple',
      
    },
    preesedItem: {
        opacity: 0.5,
        backgroundColor: 'red',
    },
    goalText:{
      color: 'white',
      padding:8,
    },
  });
  