import { Dropdown } from "react-bootstrap";

const filterIcon = require("../../assets/filter.png");

const FilterDropdown = () => {
    return (
        <Dropdown >
            <Dropdown.Toggle className="no-after no-border bg-transparent">
                <img src={filterIcon} className="filter antes-blue-image" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
                <Dropdown.Item href="/forum" className="fs-6 blue-text">No filter</Dropdown.Item>
                <Dropdown.Item href="/forum?filter=optie1" className="fs-6 blue-text">Optie 1</Dropdown.Item>
                <Dropdown.Item href="/forum?filter=optie2" className="fs-6 blue-text">Optie 2</Dropdown.Item>
                <Dropdown.Item href="/forum?filter=optie3" className="fs-6 blue-text">Optie 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FilterDropdown