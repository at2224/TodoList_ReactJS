import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput" // need imports to display html changes made in /components files


function App() {
  let todos = [
    'Go to the gym',
    'Eat more veges',
    'Pick up kids from school'
  ]
  return (
    // add files so changes made to files will reflect on main tag html
    <>
      <TodoInput todos = {todos} /> 
      <TodoList todos={todos}/>
    </>
  )
}

export default App
