import "./button.css";

const Button = ({ type, symbol, color }) => {
  return (
    <button style={{color}} className={type}>{symbol}</button>
  );
};

export default Button;
