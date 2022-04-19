import React, { useContext } from 'react'
import { AppContext, ContentContext } from './ContentContext'
import Todo from './Todo';

const Form = () => {
    const state = useContext(AppContext);
  return (
    <div>
        <form>
          <label>Enter To Do: </label>
          <input
            type="text"
            placeholder="Enter to Do"
            onChange={state.handleTodo}
            value={state.todo}
          />
          <label> Enter ID: </label>
          <input
            type="text"
            placeholder="Enter ID"
            onChange={state.handleId}
            value={state.id}
          />
          &nbsp;&nbsp;
          <button type="submit" onClick={state.handleSubmit}>
            Add Todo
          </button>
        </form>
      <Todo/>

    </div>
  )
}

export default Form