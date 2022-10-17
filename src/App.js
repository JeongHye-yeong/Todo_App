import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import './App.css'

function App() {
  const [todos, setTodos] =  useState([
    {
      id: 1,
      text: '운동하기',
      checked: true,
    },
    {
      id: 2,
      text: '요리하기',
      checked: true,
    },
    {
      id: 3,
      text: '학원가기',
      checked: false,
    }
  ]);
  
  const nextId = useRef(4);//ref를 사용해서 변수 담기
  const onInsert = useCallback(value => {
    const todo ={
      id:nextId.current,
      text : value,
      checked: false,
    };
    setTodos(todos.concat(todo));//concat 배열과 배열을 결합할 떄 사용
    nextId.current += 1;
  },[todos]);//onInsert는 todos가 바뀔 때마다 실행이 된다.
  
  const onRemove = useCallback( id => {
    setTodos(todos.filter(todo => todo.id !== id));
  },[todos]);//todos배열이 업뎃될 떄마다 생성됨

  const onToggle = useCallback( id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
  },[todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
