import React from "react"
import { ButtonAddNewTodo } from "./assets/Components/ButtonAddNewTodo"
import { StartApp } from "./assets/Components/StartApp"
import { TodoList } from "./assets/Components/TodoList"


function App() {

  return (
    <div className="flex flex-col gap-10
     text-white 
     justify-start items-center pt-10 min-w-screen min-h-screen  bg-[#031130]">
    
    <StartApp/>
    
    <ButtonAddNewTodo />
    
    <TodoList/>
    </div>
  )
}

export default App
