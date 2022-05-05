import React, { useRef } from 'react';
import './styles.css'
import TodoList from './TodoList';

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void
}

const InputField: React.FC<Props> = ({todo,setTodo,handleAdd}) => {

    const inputRef=useRef<HTMLInputElement>(null)
  return (
      <div>
    <form className='input' onSubmit={e=>{
        handleAdd(e)
         inputRef.current?.blur()
        }}>
<input 
ref={inputRef}
placeholder="Enter a Task"
value={todo}
 className="input__box"  
 type="text" 
 onChange={(e)=>setTodo(e.target.value)}
 />

<button className='input_submit' type="submit">GO</button>
    </form>
   
    </div>
  )
}

export default InputField