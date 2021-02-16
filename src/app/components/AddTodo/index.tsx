import * as React from 'react';
import {useState} from "react"
import styled from "styled-components"
import { Text, View ,TextInput,Dimensions,TouchableHighlight} from 'react-native';



const AddTodo = () => {
  const [todoTitle,changeTodoTitle] = useState('')
  console.log(todoTitle)
  return (
  <AddTodoPresentation
    todoTitle={todoTitle}
    onchangeTodoTitle={changeTodoTitle}
  />)
}

type Props = {
  todoTitle:string
  // onSubmit: () => unknown
  onchangeTodoTitle: (txt: string) => unknown
}

const AddTodoPresentation: React.FC<Props> =({
  todoTitle,
  // onSubmit,
  onchangeTodoTitle
}) => {
  return (
    <Section>
      <Form>
        <Header>タスク名を入力</Header>
        <Input
          value={todoTitle}
          onChangeText={onchangeTodoTitle}
        />
        <SubmitSection>
        <Submit>
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
