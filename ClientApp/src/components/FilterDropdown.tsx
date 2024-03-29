import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const filterIcon = require("../assets/filter.png");

interface Props {
  page: string;
  options?: string[];
  show?: boolean;
}

const FilterDropdown = ({ page, options = [], show = false }: Props) => {
  const navigate = useNavigate();
  const [_show, setShow] = useState<boolean>(show);
  const [searchField, setSearchField] = useState<string>("");
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let search = event.target.value;

    // make sure you can search both '#tag' and 'tag'
    if (search.startsWith("#")) {
      search = search.substring(1);
    }

    setSearchField(search);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShow(false);
    navigate(`/${page}?filter=${searchField}`);
  };

  const handleNoFilterClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setShow(false);
    navigate(`/${page}`);
  };

  const handleOptionClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setShow(false);
    navigate(`/${page}?filter=${event.currentTarget.innerText}`);
  };

  return (
    <Dropdown
      autoClose={true}
      show={_show}
      onToggle={() => setShow(!_show)}
      role="filter-dropdown"
    >
      <Dropdown.Toggle
        className="no-after no-border bg-transparent"
        role="dropdown-toggle"
      >
        <img src={filterIcon} className="filter antes-blue-image" />
      </Dropdown.Toggle>
      <Dropdown.Menu align="end">
        <form className="px-2 d-flex gap-1" onSubmit={handleSubmit}>
          <input
            id="forum-search"
            type="search"
            placeholder="Zoeken"
            onChange={onSearchChange}
            role="dropdown-search"
          ></input>
          <Button type="submit" size="sm" role="dropdown-search-submit">
            Zoek
          </Button>
        </form>
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={handleNoFilterClick}
          className="fs-6 blue-text"
          role="remove-filter-option"
        >
          Verwijder filter
        </Dropdown.Item>
        {options.length > 0 && (
          <>
            {options.map((option) => (
              <Dropdown.Item
                key={option}
                //href={`/${page}?filter=${option}`}
                onClick={handleOptionClick}
                className="fs-6 blue-text"
              >
                {option}
              </Dropdown.Item>
            ))}
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterDropdown;
