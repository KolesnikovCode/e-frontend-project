import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header: React.FC<{}> = () => {
  return (
    <div>
      <strong>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </strong>
    </div>
  );
};

export default Header;
