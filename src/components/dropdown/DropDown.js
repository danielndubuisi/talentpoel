import React, { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import "./dropdown.css";

const DropDown = ({ title, items, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`dropdown-main-con ${className}`}>
      <div className="dropdown-con">
        <div
          onClick={() => setOpen(!open)}
          className="dropdown-btn"
          style={{ display: open ? "none" : "flex" }}
        >
          <p className="drop-dope-text">{title}</p>
          <DownOutlined />
        </div>

        <div
          style={{ display: open ? "block" : "none" }}
          className="dropdown-content-data"
        >
          <div onClick={() => setOpen(!open)} className="dropdown-btn">
            <p className="drop-dope-text">{title}</p>
            <UpOutlined />
          </div>
          <div>
            <ul>
              {items.map((item) => (
                <li key={item.key} className="drop-down-li">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
