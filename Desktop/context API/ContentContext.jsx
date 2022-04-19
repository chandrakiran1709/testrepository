import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const ContentContext = (props) => {
    console.log(AppContext);
    useEffect(() => {
        fetchingData();
      }, []);
    
      const fetchingData = (props) => {
        axios
          .get("http://localhost:3000/todo")
          .then((res) => {
            const data = res.data;
            setList(data);
          })
          .catch(function (error) {
            console.log(error);
          });
      };

      const [list, setList] = useState([fetchingData]);
      const [todo, setTodo] = useState("");
      const [id, setId] = useState();
    
      const handleTodo = (event) => {
        setTodo(event.target.value);
      };
      const handleId = (event) => {
        setId(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        setList([...list, { id: id, todoItem: todo }]);
        setTodo("");
        setId("");
      };
      const handleDelete = (id) => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
      };

      return(
        <AppContext.Provider value={{list, todo, id, handleTodo, handleId, handleSubmit, handleDelete}}>
            {props.children}
        </AppContext.Provider>
      );

}