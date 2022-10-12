import React from "react";

import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav id="menu">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
    
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <strong>TRANG CHỦ</strong>
                  
             
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
             <strong> GIỚI THIỆU BẢN THÂN</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
