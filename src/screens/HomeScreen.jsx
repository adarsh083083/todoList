import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderAtom from '../components/HeaderAtom/HeaderAtom';
import {styles} from './styles';
import ButtonAtom from '../components/ButtonAtom/ButtonAtom';
import {IMAGES} from '../constants/Images';

const Home_Screen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  // Load todo-list from AsyncStorage when the component mounts
  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  // Save todo-list to AsyncStorage whenever the todo-list state changes
  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };
  useEffect(() => {
    loadTasks();
  }, []);
  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, {text: taskText, completed: false}]);
      setTaskText('');
    }
  };

  const deleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderAtom title="To-Do List" />
      <FlatList
        data={tasks}
        renderItem={({item, index}) => (
          <View style={styles.todoListStyle}>
            <TouchableOpacity onPress={() => toggleTask(index)}>
              <Text
                style={{
                  textDecorationLine: item.completed ? 'line-through' : 'none',
                }}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTask(index)}>
              <Image style={styles.deleteIcon} source={IMAGES.DELETE} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
      <TextInput
        placeholder="Add a new To-do List"
        value={taskText}
        onChangeText={text => setTaskText(text)}
        style={styles.inputStyle}
      />
      <ButtonAtom onPress={addTask} title="Add To-do List" />
    </SafeAreaView>
  );
};

export default Home_Screen;
