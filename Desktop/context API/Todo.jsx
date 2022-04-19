import React, { useContext } from "react";
import { AppContext } from "./ContentContext";

const Todo = () => {
    const state = useContext(AppContext);
  return (
    <>
      <ul>
        {state.list.map((item) => (
          <>
            <li>
              {item.todoItem}&nbsp;&nbsp;&nbsp;
              <button onClick={() => state.handleDelete(item.id)}>
                Delete
              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default Todo;