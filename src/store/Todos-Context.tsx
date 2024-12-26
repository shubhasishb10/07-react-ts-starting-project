import React, { useState } from "react"
import Todo from "../models/todo"

const TodosContext = React.createContext<{
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}>({
    items: [],
    addTodo: (text: string) => { },
    removeTodo: (id: string) => { }
})

const TodosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
        setTodos(prev => {
            return [
                ...prev,
                newTodo
            ]
        })
    }

    const removeTodoHandler = (id: string) => {
        setTodos(prev => {
            return prev.filter(p => p.id !== id);
        })
    }

    const context: {
        items: Todo[],
        addTodo: (text: string) => void,
        removeTodo: (id: string) => void
    } = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={context}>
        {props.children}
    </TodosContext.Provider>
}