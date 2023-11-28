import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";

const filterIcon = require("../../assets/filter.png");

const FilterDropdown = () => {
    const [searchField, setSearchField] = useState<string>()
    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        let search = event.target.value;

        // make sure you can search both '#tag' and 'tag'
        if (search.startsWith("#")) {
            search = search.substring(1);
        }

        setSearchField(search);
    }

    return (
        <Dropdown >
            <Dropdown.Toggle className="no-after no-border bg-transparent">
                <img src={filterIcon} className="filter antes-blue-image" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
                <form className="px-2 d-flex gap-1">
                    <input id="forum-search" type="search" placeholder="Zoeken" onChange={onSearchChange}></input>
                    <Button href={`/forum?filter=${searchField}`} size="sm">Zoek</Button>
                </form>
                <Dropdown.Divider />
                <Dropdown.Item href="/forum" className="fs-6 blue-text">No filter</Dropdown.Item>
                <Dropdown.Item href="/forum?filter=optie1" className="fs-6 blue-text">Optie 1</Dropdown.Item>
                <Dropdown.Item href="/forum?filter=optie2" className="fs-6 blue-text">Optie 2</Dropdown.Item>
                <Dropdown.Item href="/forum?filter=optie3" className="fs-6 blue-text">Optie 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FilterDropdown