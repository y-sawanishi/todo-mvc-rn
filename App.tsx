import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddTodo from './src/app/components/AddTodo'
import ToDoList from './src/app/components/TodoList'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="タスクを作成" component={AddTodo} />
        <Tab.Screen name="タスク一覧" component={ToDoList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
