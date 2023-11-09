import { TODO_FILTERS } from "../constants"
import { FilterValue } from "../types"

interface FiltersProps {
    filterSelected: FilterValue
    onFilterChange: (filter: FilterValue) => void
}

const FILTERS_BUTTONS = [
    {
        filter: TODO_FILTERS.ALL,
        label: 'Todos',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    {
        filter: TODO_FILTERS.COMPLETED,
        label: 'Completados',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    },
    {
        filter: TODO_FILTERS.ACTIVE,
        label: 'Activos',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },

] 

export default function Filters({ filterSelected, onFilterChange }: FiltersProps) {

    return (
        <ul className="filters">
            {
                FILTERS_BUTTONS.map( filter => 
                    <li key={filter.filter}>
                        <a 
                            className={filter.filter === filterSelected ? 'active' :''} 
                            href= {filter.href} 
                            onClick= {(evt) => {
                                evt.preventDefault()
                                onFilterChange(filter.filter)
                            }} 
                        >
                            {filter.label}
                        </a>
                    </li>        
                )
            }            
        </ul>
    )
}
