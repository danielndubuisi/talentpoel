import React, { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import "./dropdown.css";

const items = [
  {
    label: "1st menu item",
    key: "0",
  },
  {
    label: "2nd menu item",
    key: "1",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const DropDown = ({ title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-main-con">
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
