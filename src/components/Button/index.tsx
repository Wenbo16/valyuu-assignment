import type { ButtonProps } from "antd";
import { Button as AntdButton } from "antd";

const Button = (props: ButtonProps) => {
  const { size = "large", ...otherProps } = props;
  const styles = {
    large: { width: "157px", height: "60px", borderRadius: "30px" },
    middle: { width: "140px", height: "48px", borderRadius: "30px" },
    small: { width: "120px", height: "36px", borderRadius: "30px" }
  };
  const buttonEle = (
    <AntdButton style={styles[size]} {...otherProps}>
      {props.children}
    </AntdButton>
  );
  return buttonEle;
};

export default Button;
