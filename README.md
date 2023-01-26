
# TodoList App by react and tailwind CSS
## Introduction
This project is a React   simple to-do list application."TodoList" The component uses the useState hook from React to manage the state of the application, which includes the input for new to-do items, the list of to-do items, and whether or not the list is empty.

# Component Structure
The component starts by importing the React library, and the useState hook from React. Then it creates a functional component called "TodoList" that returns JSX to be rendered on the page.

The state is initialized at the beginning of the component with the useState hook. The state includes three variables:

InputTodos is a string that keeps track of the input value of the to-do item.
TodoItems is an array that keeps track of the list of to-do items.
WithTodo is a boolean that keeps track of whether or not the list is empty.
The component also uses a date state that keeps track of the current time by calling new Date().toLocaleTimeString()
Functions
The component includes a function called "ItemsList" that is used to add new to-do items to the list. This function is called when the user clicks the "Save" button. It updates the TodoItems state by using the spread operator to add the new input value to the old list of items.

The component also includes a function called "handleKeyDown" which is used to add new to-do items to the list when the user press Enter key.

# JSX
The component then renders the JSX for the page. It includes a div with a grid layout, where the first column is used to display the list of to-do items, and the second column is used to input new to-do items.

If the list is empty, the component renders an icon and text indicating that there are no to-do items. If there are to-do items, the component maps over the list of items and displays each one in a div element along with a checkbox, a todo number and the date when the todo created.

The component also includes an input field for the user to input new to-do items, and a button to save the items. The input field and button are both controlled components, which means that their values and behavior are controlled by the state.

# Folder and file structure
The entry point  src/App.jsx and all functional code is write in src/TodoList.jsx. there have a navbar component in src/Navbar.jsx




# For run this project in your deivce

### First of all you need to clone the Repositorie
For git clone 

```bash
  git clone https://github.com/ImtiazNayeemShawon/React-todo-app.git todoapp
```
### Change the directory 
For git clone 

```bash
  cd todoapp
```
### Install defendencis
 install by npm
 

```bash
  npm install
```
### or 
install by yarn

```bash
  yarn install
```
### And then for run the project


```bash
  yarn/npm run dev
```

# Technology used in this project
## React js
React is an open-source JavaScript library for building user interfaces. It allows developers to build reusable UI components and manage the state of a web application in an efficient way. React uses a virtual DOM to optimize performance and updates only the necessary elements when the state changes.

## Tailwind CSS 
Tailwind CSS is a utility-first CSS framework for quickly building custom designs. It provides a set of pre-defined CSS classes that can be used to apply styling to HTML elements with minimal custom CSS.
## vite.js
Vite is a next-generation, front-end tool that focuses on speed and performance.




## © Author of this project

Imtiaz Nayeem Shawon 

Front-end developer 
