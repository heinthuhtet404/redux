import React from 'react'
import { getTodos } from '../store/reducer/todo';

import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const isLoading = useSelector((state) => state.todo.isLoading);

  console.log("Todos:", todos);
  console.log("Loading:", isLoading);


  const getTodoHandler = () => {
    dispatch(getTodos());
  }

  return (
    <>
      <button className='welcome-btn' onClick={getTodoHandler}>Get Todo</button>
      <section>
        {
          isLoading && <p>Getting todos ...</p>
        }
        {
          !isLoading && todos.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>
          })
        }
        {
          !isLoading && todos.length < 1 && <p>Click get todo btn to get your todos</p>
        }
      </section>
    </>
  )
}

export default Todo