import { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';


const Hamburger = require("../../assets/hamburger.png");

const NavDropDown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    return (
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret className="no-after">
                <img src={Hamburger} className="hamburger antes-red-image" />
            </DropdownToggle>
            <DropdownMenu end={false}>
                <DropdownItem href="/forum" className="fs-5">Forum</DropdownItem>
                <DropdownItem href="/activities" className="fs-5">Activiteiten</DropdownItem>
                <DropdownItem href="/profile" className="fs-5">Profiel</DropdownItem>
                <DropdownItem href="/" className="fs-5">Trainingen</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/about" className="fs-5">Over ons</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default NavDropDown