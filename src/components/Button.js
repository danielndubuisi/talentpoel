import { Spin } from "antd";
import "./Button.css";

import arrow from "./asset/icons/btn-arrow.svg";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--center", "btn--mobile", "btn--wide"];

const COLORS = ["primary", "blue", "white", "green"];

export const Button = ({
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  text,
  display,
  icon,
  loading,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : null;

  return (
    <>
      {display ? (
        loading ? (
          <button
            className={`btn ${checkButtonStyle} spin-btn-container`}
            style={{ width: "100%" }}
            type={type}
          >
            <Spin size="large" />
          </button>
        ) : (
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
            onClick={onClick}
            type={type}
          >
            {text}
            {icon && <img src={arrow} alt="" style={{ marginLeft: "10px" }} />}
          </button>
        )
      ) : null}
    </>
  );
};
