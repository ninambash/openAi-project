import React, { useState } from 'react';

const Menu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const styles = `
    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #333;
      padding: 10px;
    }

    .search-bar {
      flex: 1;
      margin-right: 10px;
    }

    .search-bar input[type="text"] {
      width: 100%;
      padding: 10px;
      border: none;
      background-color: #444;
      color: #fff;
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-toggle {
      background-color: #333;
      color: #fff;
      border: none;
      cursor: pointer;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .dropdown-toggle:hover {
      background-color: #555;
    }

    .dropdown-menu {
      display: none;
      position: absolute;
      background-color: #333;
      list-style: none;
      padding: 0;
      margin: 0;
      border: 1px solid #555;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }

    .dropdown-menu.open {
      display: block;
    }

    .dropdown-menu li {
      padding: 10px 20px;
      color: #fff;
      cursor: pointer;
    }

    .dropdown-menu li:hover {
      background-color: #555;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="menu">
        <div className={`search-bar ${isDropdownOpen ? 'hide-search' : ''}`}>
          <input type="text" placeholder="Search..." />
          {/* Add your search functionality here */}
        </div>
        <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Menu
          </button>
          <ul className="dropdown-menu">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
            {/* Add your menu items here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
