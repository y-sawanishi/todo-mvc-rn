import * as React from 'react';
import {useState} from "react"
import axios from "axios"
import styled from "styled-components"
import { Text, View ,TextInput,Dimensions,TouchableHighlight} from 'react-native';
import Snackbar from "../Snackbar" ;



const AddTodo = () => {
  const [todoTitle,changeTodoTitle] = useState('')
  const [created, changeCreated] = useState(false)
  console.log(todoTitle)
  const onSubmit = async () =>{
    if (todoTitle.trim() === "") {
      return
    }
    const payload = {
      title: todoTitle,
      status: "todo",
    }
    try{
      await axios
        .post('http://localhost:3000/todo',payload)
        changeTodoTitle('')
        changeCreated(true)
    } catch (err) {
      console.error(err)
    }

  }
  return (
  <AddTodoPresentation
    todoTitle={todoTitle}
    onchangeTodoTitle={changeTodoTitle}
    onSubmit={onSubmit}
    created={created}
  />)
}

type Props = {
  todoTitle:string
  onchangeTodoTitle: (txt: string) => unknown
  onSubmit: () => unknown
  created: boolean
}

const AddTodoPresentation: React.FC<Props> =({
  todoTitle,
  onchangeTodoTitle,
  onSubmit,
  created,
}) => {
  return (
    <Section>
      {created && <Snackbar message={"作成完了！！！"}/> }
      <Form>
        <Header>タスク名を入力</Header>
        <Input
          value={todoTitle}
          onChangeText={onchangeTodoTitle}
        />
        <SubmitSection>
        <Submit onPress={onSubmit}>
          <Text>追加する</Text>
        </Submit>
        </SubmitSection>
      </Form>
    </Section>
  );
}

export default AddTodo

const Section = styled(View)`
  flex: 1;
  align-items: center;
  background: #fff;
`
const Form = styled(View)`
  margin-top: 80px;
  width:${Dimensions.get("window").width -60}px;
`

const Input = styled(TextInput)`
  margin-top: 10px;
  height: 40px;
  margin-left 20px;
  border:1px solid #000;
  background: #dcdcdb;
`
const Header = styled(Text)`
  font-weight: bold;
`

const SubmitSection = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
`


const Submit = styled(TouchableHighlight)`
  background: #3CAEA3;
  width:100px;
  height: 40px;
  align-items:center;
  justify-content: center;
  margin-top: 10px;
`
