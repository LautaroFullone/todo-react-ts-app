import { FormEvent, useState } from "react"

interface CreateTodoProps {
    saveTodo: (title: string) => void
}

export default function CreateTodo({ saveTodo }: CreateTodoProps) {

    const [inputValue, setInputValue] = useState<string>('')

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        saveTodo(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={inputValue} 
                className="new-todo" 
                onChange={(evt) => setInputValue(evt.target.value)}
                placeholder="Que hacemo?"
                autoFocus
            />
        </form>
    )
}
