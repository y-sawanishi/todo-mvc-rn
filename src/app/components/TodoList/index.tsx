import * as React from 'react';
import {useState, useCallback} from "react"
import axios from "axios"
import styled from "styled-components"
import { useNavigation , useFocusEffect} from '@react-navigation/native';
import { Text, View ,SectionList,Dimensions,TouchableHighlight} from 'react-native';


const dummyData = [
  {
    title: 'TODO',
    data: [
      {
        id: 'xxxx-yyyy-zzzz',
        title: 'タスクを削除できるようにする',
        status: 'todo'
      },
      {
        id: 'xxxx-yyyy-zzzz',
        title: 'タスクを削除できるようにするyonn',
        status: 'todo'
      },
    ]
  },
  {
    title: 'DOING',
    data: [
      {
        id: 'xxxx-yyyy-aaaa',
        title: 'task一覧画面を作る',
        status: 'doing'
      },
    ]
  },
  {
    title: 'DONE',
    data: [
      {
        id: 'xxxx-yyyy-bbbb',
        title: 'タスクを削除できるようにする',
        status: 'todo'
      },
    ]
  },
]

const ToDoList: React.FC =() => {
  const navigation = useNavigation()

  type Task = {
    id:string,
    title: string,
    status: 'todo' | 'doing' | 'done'
  }

  type Sections = {
    title: string
    data:Array<Task>
  }[]

  const [data, setData] = useState<null | Sections>(null)

  useFocusEffect(
    useCallback(() => {
      axios.get<Task[]>('http://localhost:3000/todo')
      .then(res => {
        const processdData: Sections = [
          {
            title:'todo',
            data: [],
          },
          {
            title:'doing',
            data: [],
          },
          {
            title:'done',
            data: [],
          },
        ]
        //TOdo:fetchして取得したデータをsectionst方に変換してsetData
        for (const task of res.data) {
          if (task.status === 'todo') {
            processdData[0].data.push(task)
          }
          if(task.status === 'doing') {
            processdData[1].data.push(task)
          }
          if(task.status === 'done') {
            processdData[2].data.push(task)
          }
        }
        setData(processdData)
      })
      // todo: localhost:3000/todoにgetをfetchする
    },[])
  )
  if(!data) return null
  return (
    <Section >
      <SectionList
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ItemWrapper onPress={() => navigation.navigate("タスクの編集",{ id: item.id })} underlayColor="#aaf" >
            <ItemText>{item.title}</ItemText>
          </ItemWrapper>
        )}
        renderSectionHeader={({section:{title}}) => (
          <SectionHeaderWrapper>
            <SectionHeaderText>{title}</SectionHeaderText>
          </SectionHeaderWrapper>
        )}

      />
      <Text>Settings!</Text>
    </Section>
  );
}

const Section = styled(View)`
  align-items: center;
  background:white;
  height: ${Dimensions.get('window').height}px;

`
const SectionHeaderWrapper = styled(View)`
  width: ${Dimensions.get('window').width}px;
  background: #eee;
  height: 30px;
  justify-content: center;
`
const SectionHeaderText = styled(Text)`
  font-weight: bold;
  margin-left:15px;
`
const ItemWrapper = styled(TouchableHighlight)`
  height: 40px;
  justify-content: center;
  border-top-color:#aaa;
  border-top-width: 1px;
  background: #fff;
`
const ItemText = styled(Text)`
  margin-left:15px;
`



export default ToDoList