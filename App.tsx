import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5,MaterialIcons } from '@expo/vector-icons';
import AddTodo from './src/app/components/AddTodo'
import ToDoList from './src/app/components/TodoList'
import EditTodo from './src/app/components/EditTodo'


const Tab = createBottomTabNavigator();

const AddToDoStack = createStackNavigator()
const ToDoListStack = createStackNavigator()

const AddTodoStackComponet = () => {
  return(
    <AddToDoStack.Navigator>
      <AddToDoStack.Screen
        name="タスクの追加"
        component={AddTodo}
      />
    </AddToDoStack.Navigator>
  )
}
const ToDoListStackComponet = () => {
  return(
    <ToDoListStack.Navigator>
      <ToDoListStack.Screen
        name="タスクの一覧"
        component={ToDoList}
      />
      <AddToDoStack.Screen
        name="タスクの編集"
        component={EditTodo}
      />
    </ToDoListStack.Navigator>
  )
}

const AddTodoIcon: React.FC<{color:string,size:number}> = ({color,size}) => (<MaterialIcons name="add-task" size={size} color={color} />)
const ToDoListIcon: React.FC<{color:string,size:number}> = ({color,size}) => (<FontAwesome5 name="tasks" size={size} color={color} />)

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name="AddTodoStack"
        component={AddTodoStackComponet}
        options={{tabBarIcon:AddTodoIcon}} />

        <Tab.Screen
        name="ToDoListStack"
        component={ToDoListStackComponet}
        options={{tabBarIcon:ToDoListIcon}}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
