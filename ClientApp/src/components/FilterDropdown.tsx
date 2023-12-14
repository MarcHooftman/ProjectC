import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const filterIcon = require("../assets/filter.png");

interface Props {
  page: string;
  options?: string[];
}

const FilterDropdown = ({ page, options = [] }: Props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const [searchField, setSearchField] = useState<string>();
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
    <Dropdown autoClose={true} show={show} onToggle={() => setShow(!show)}>
      <Dropdown.Toggle className="no-after no-border bg-transparent">
        <img src={filterIcon} className="filter antes-blue-image" />
      </Dropdown.Toggle>
      <Dropdown.Menu align="end">
        <form className="px-2 d-flex gap-1" onSubmit={handleSubmit}>
          <input
            id="forum-search"
            type="search"
            placeholder="Zoeken"
            onChange={onSearchChange}
          ></input>
          <Button type="submit" size="sm">
            Zoek
          </Button>
        </form>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleNoFilterClick} className="fs-6 blue-text">
          No filter
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
