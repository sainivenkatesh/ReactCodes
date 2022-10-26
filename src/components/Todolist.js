import React,{useState} from 'react'
import List from './list';
const TodoList = () => {
  const [task,setStateTask]=useState("");
  const [todos,setStateTodos]=useState([]);
  const changeHandler=e=>{
    setStateTask(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefault();
    const newTodos=[...todos,task];
    setStateTodos(newTodos);
    setStateTask("");
  }
  const deleteHandler=(indexvalue)=>{
    const newTodos= todos.filter((todo,i)=> i!==indexvalue);
    setStateTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <input type='text' name='task' value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <input type='submit' value='Add' name='Add' />
            </form> &nbsp;&nbsp;
            <List todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default TodoList;
