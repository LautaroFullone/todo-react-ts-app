import { Todo as TodoType } from "../types"
import Todo from "./Todo"

interface TodosProps {
    todos: TodoType[]
    onRemoveTodo: (id: string) => void
    onCompleteChange: (id: string, completed: boolean) => void
}

export default function Todos({ todos, onRemoveTodo, onCompleteChange }: TodosProps) {
    return (
        <ul className="todo-list">
            {
                todos.map(todo => 
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}> 
                        <Todo {...todo} onRemoveTodo={onRemoveTodo} onCompleteChange={onCompleteChange}/>
                    </li>
                )
            }
        </ul>
    )
}
