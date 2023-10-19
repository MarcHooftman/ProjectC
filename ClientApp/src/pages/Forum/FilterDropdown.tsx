
const filterIcon = require("../../assets/filter.png");

const FilterDropdown = () => {
    return (
        <details className="filter">
            <summary>
                <img className="filter-icon" src={filterIcon} />
            </summary>
            <div className="filter-options">
                <div className="filter-option">No filter</div>
                <div className="filter-option">Optie 1</div>
                <div className="filter-option">Optie 2</div>
                <div className="filter-option">Optie 3</div>
            </div>
        </details>
    )
}

export default FilterDropdown