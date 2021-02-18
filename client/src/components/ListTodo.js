import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //get function
  const getTodos = async () => {
    const response = await fetch("http://localhost:5000/todos");
    const todoArray = await response.json();

    setTodos(todoArray);
  };
  //delete todo func
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {/*<tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
