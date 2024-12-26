import { useRef } from "react";

import classes from "./NewTodo.module.css"

const NewTodo: React.FC<{ onAddTodo: (data: string) => void }> = (props) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        props.onAddTodo(enteredText);
        todoTextInputRef.current!.value = "";
    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>
}

export default NewTodo;