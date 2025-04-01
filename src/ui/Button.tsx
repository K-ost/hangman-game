import { ComponentPropsWithRef, JSX } from "react";
import styled from "styled-components";

type BtnVariant = "outlined" | "filled";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  variant?: BtnVariant;
};

const Btn = styled.button<{ $variant?: BtnVariant }>`
  background: var(--color-white);
  border-radius: 24px;
  font-size: 32px;
  line-height: 40px;
  padding: 20px 34px;
`;

const Button = (props: ButtonProps): JSX.Element => {
  const { variant = "outlined" } = props;
  return <Btn $variant={variant} {...props} />;
};

export default Button;
