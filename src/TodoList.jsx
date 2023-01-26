import React from "react";
import { useState } from "react";

export default function TodoList() {
  const [InputTodos, setInputTodos] = useState("");
  const [TodoItems, SetTodoItems] = useState([]);
  const [WithTodo, setWithoutTodo] = useState(true);

  // Local date  and time for  print with todos
  const [date] = useState(new Date().toLocaleTimeString());

  // This function is store todos in 'TodoItems' array
  const ItemsList = () => {
    setWithoutTodo(false),
      setInputTodos(""),
      SetTodoItems((oldItems) => {
        return [...oldItems, InputTodos];
      });
  };
  // This function for save todos by Enter key
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      ItemsList(), setWithoutTodo(false);
      setInputTodos("");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
        <div className="m-10 bg-gray-50 max-sm:m-1">
          {/* This condition for conditional rendering if there have no todo render a icon and a text if there have todolist the icon woill be hidden */}

          {WithTodo ? (
            <div>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-44 h-44 m-auto mt-44 text-indigo-500 "
              >
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                <path
                  fillRule="evenodd"
                  d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-center font-bold text-3xl text-gray-600">
                You have nothing todo
              </p>
            </div>
          ) : (
            //this is map method for displaying todos from the array and alos there will be print todo number the date when the todo created
            <ul className="p-10">
              {TodoItems.map((todos, index) => {
                return (
                  <div
                    className="flex justify-between max-sm:block capitalize text-gray-600 font-semibold bg-slate-100 leading-7 pl-5 p-3 m-1 rounded-lg w-full"
                    key={index}
                  >
                    <p className="text-left ">
                      <input className=" mr-4 " type="checkbox" />
                      {index + 1}. {todos}
                    </p>
                    <p className="text-right  ml-11 font-light uppercase">
                      {date}
                    </p>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
        <div className="block m-auto mt-80 max-sm:mt-2">
          {/* This input for input todos from users */}

          <input
            className="bg-gray-300 text-center capitalize text-gray-600 p-2 rounded w-80 outline-0"
            type="text"
            placeholder="ENTER YOUR TODO'S"
            value={InputTodos}
            onChange={(e) => setInputTodos(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <br />
          {/* Button for save todos in list */}

          <button
            className="bg-blue-500 p-2 pl-5 pr-5 rounded text-slate-50 font-semibold mt-7 m-auto block max-sm:mt-3 outline-none"
            onClick={ItemsList}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
