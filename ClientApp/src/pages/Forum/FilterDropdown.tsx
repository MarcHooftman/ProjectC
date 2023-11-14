
const filterIcon = require("../../assets/filter.png");

const FilterDropdown = () => {
    return (
        <details className="filter d-flex">
            <summary className="d-flex justify-content-end">
                <img className="filter-icon antes-blue-image" src={filterIcon} />
            </summary>
            <div className="filter-options btn-group-vertical">
                <a href="/forum" className="card btn">No filter</a>
                <a href="/forum?filter=optie1" className="card btn">Optie 1</a>
                <a href="/forum?filter=optie2" className="card btn">Optie 2</a>
                <a href="/forum?filter=optie3" className="card btn">Optie 3</a>
            </div>
        </details>
    )
}

export default FilterDropdown