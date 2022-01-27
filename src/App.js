import './App.css';
import {useState,useRef} from "react";
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import react from 'react';

function App(){
  const [todos,setTodos] = useState([
    {
      id:1,
      text:'리액트의 기초 알아보기',
      checked:true
    },
    {
      id:2,
      text:'컴포넌트 스타일 해보기',
      checked:false
    },
    {
      id:3,
      text:'일정관리앱 만들어보기',
      checked:false
    }
  ]);
  //고윳값으로 사용될 id
  //ref를 사용해서 변수에 담기
  const nextId = useRef(4);
  function onInsert(text){
    const todo = {
      id : nextId.current,
      text,
      checked : false
    }
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }
  //해당id항목삭제
  function onRemove(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }
  //해당id항목 checked 반전
  function onToggle(id){
    setTodos(
      todos.map(todo=>todo.id === id ? { ...todo , checked: !todo.checked } : todo )
    )
  }
  return(
    <div className='App'>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} onRemove={onRemove} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  )
}
export default App;


{/* 

1. TodoTemplate 화면을 가운데 정렬
타이틀을 나타냄
2. TodoInsert 새로운 항목을 추가할수있는 컴포넌트
3. TodoListItem 각 할일 항목에 대한 정보를 보여주는 컴포넌트
4. TodoList 여러개의 TodoListItem 컴포넌트를 보여줌

기능 구현하기
1. App에서 todos 상태 사용하기
-일정항목에 대한 상태들을 모두 App컴포넌트에서 관리
-useState를 사용해서 todos라는 상태를 정의
-todos를 TodoList의 props로 전달

*npm install classnames 설치
import cn from 'classnames';

classNames('name1','name2') => 'name1 name2'
classNames('name1',{ name2 : true }) => 'name1 name2'
classNames('name1',{ name2 : false }) => 'name1'
classNames({'name1':true}) => 'name1'
classNames({'name1':false}) => ''
classNames(['name1','name2']) => 'name1 name2'

classNames('name1',{name2:true,name3:false},'name4')
=> 'name1 name2 name4



2. 항목 추가 기능 구현하기
-TodoInsert컴포넌트에서 input상태를 관리
-컴포넌트에는 todos배열에 새로운 객체를 추가하는 함수 정의

*/}
