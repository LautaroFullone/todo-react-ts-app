import { useEffect, useState } from 'react'
import Todos from './components/Todos'
import Footer from './components/Footer'
import { TODO_FILTERS } from './constants'
import { FilterValue } from './types'
import Header from './components/Header'

const mockTodo = [
    {
        id: '1',
        title: 'Terminar el segundo proyecto',
        completed: false
    },
    {
        id: '2',
        title: 'Aprender react con typescript',
        completed: false
    },
    {
        id: '3',
        title: 'Rendir examen',
        completed: false
    },
]

function App() {
    const [todos, setTodos] = useState(mockTodo)
    const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

    //TODO: rehacer esto
    function handleRemove(id: string) {
        const newTodos = todos.filter(item => item.id !== id)
        setTodos(newTodos)
    }

    function handleComplete(id: string, completed: boolean) {
        const newTodos = todos.map(item => {
            if (item.id === id)
                return {
                    ...item,
                    completed
                }
            return item;
        })
        setTodos(newTodos)
    }

    function handleClearComplete() {
        const newTodos = todos.filter(item => !item.completed)
        setTodos(newTodos)
    }

    function handleFilterChange(filter: FilterValue) {
        setFilterSelected(filter);
    }

    function handleAddTodo(title: string) {
        const newTodo = {
            id: crypto.randomUUID(),
            title,
            completed: false
        }
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }

    const activeCount = todos.filter(item => item.completed === false).length;
    const completedCount = todos.length - activeCount;

    const filteredTodos = todos.filter( item => {
        if(filterSelected === TODO_FILTERS.ACTIVE) return !item.completed
        if(filterSelected === TODO_FILTERS.COMPLETED) return item.completed
        
        return item
    })

    return (
        <div className="todoapp">

            <Header onAddTodo={handleAddTodo} />

            <Todos
                todos={filteredTodos}
                onRemoveTodo={handleRemove}
                onCompleteChange={handleComplete}
            />

            <Footer
                filterSelected={filterSelected}
                activeCount={activeCount}
                completedCount={completedCount}
                onFilterChange={handleFilterChange}
                onClearCompleted={handleClearComplete}
            />

        </div>
    )
}

export default App
