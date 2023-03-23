import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLORS = ["primary", "blue", "white", "green"];

export const Button = ({
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  text,
  display,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : null;

  return (
    <>
      {display ? (
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
          onClick={onClick}
          type={type}
        >
          {text}
        </button>
      ) : null}
    </>
  );
};
