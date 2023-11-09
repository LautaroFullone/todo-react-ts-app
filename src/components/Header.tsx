import CreateTodo from "./CreateTodo"

interface HeaderProps {
    onAddTodo: (title: string) => void
}

export default function Header({ onAddTodo }: HeaderProps) {
    return (
        <header className="header">
            <h1>
                todo
                <img style={{ width: 60, height: 'auto' }}
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' />
            </h1>

            <CreateTodo saveTodo={onAddTodo}/>

        </header>
    )
}
