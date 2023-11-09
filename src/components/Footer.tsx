import { FilterValue } from "../types"
import Filters from "./Filters"

interface FooterProps {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    onFilterChange: (filter: FilterValue) => void
    onClearCompleted: () => void
}

export default function Footer({ activeCount, completedCount, filterSelected, onFilterChange, onClearCompleted }: FooterProps) {
  return (
    <footer className="footer">
        <span className="todo-count">
            <strong>{activeCount}</strong> pendientes
        </span>

        <Filters
            filterSelected= {filterSelected}
            onFilterChange={onFilterChange}
        />

        {
            completedCount > 0 &&
                <button className="clear-completed" onClick={onClearCompleted}>
                    Limpiar
                </button>
        }
    </footer>
  )
}
