interface TodoProps {
    id: string
    title: string
    completed: boolean
    onRemoveTodo: (id: string) => void
    onCompleteChange: (id: string, completed: boolean) => void
}

export default function Todo({ id, title, completed, onRemoveTodo, onCompleteChange}: TodoProps) {
    return (
        <div className="view">

            <input type="checkbox" className="toggle" checked={completed} onChange={() => onCompleteChange(id, !completed)} />

            <label>{title}</label>

            <button type="submit" className="destroy" onClick={() => onRemoveTodo(id)}></button>

        </div>

        
    )
}
