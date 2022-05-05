import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];
// let printName2: Function;

// let printName3: (name: string) => never;

// let personName:unknown

// function printName(name:string){

// }
// printName('x')

// type Person={
//   name:string;
//   age?:number
// }

// let person:Person={
//   name:'c'

// }
// let lotOfPeople:Person[];



// interface Person {
//   name: string;
//   age?: number;
// }

// interface Guy extends Person{
//   profession:string
// }
// type X = {
//   a: string;
//   b: number;
// };

// type Y = X & {
//   c: string;
//   d: number;
// };
// let y: Y= {
//   c:'ccc',
//   d:42,
//   a:'',
//   b:8
// };

// type X = {
//   a: string;
//   b: number;
// };

// interface Person extends X {
//   name: string;
//   age?: number;
// }



const App:React.FC=()=> {
const [todo,setTodo]=useState<string>('')
const [todos,setTodos]=useState<Todo[]>([])

useEffect(()=>{
  const data=localStorage.getItem('todos')
//  console.log(JSON.parse(data))
  // setTodos(JSON.parse(data))
})

const handleAdd=(e:React.FormEvent)=>{
  e.preventDefault();
  if(todo){
    setTodos([...todos,{id:Date.now(),todo,isDone:false}])
    setTodo('')
    localStorage.setItem('todos',JSON.stringify(todos))
  }
}

console.log(todos)

  return <div className="App">
  <h1 className="heading">ToDo</h1>
 <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
  <TodoList todos={todos} setTodos={setTodos}/>
  </div>;
}

export default App;
