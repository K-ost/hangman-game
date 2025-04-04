import { ComponentPropsWithRef, JSX } from "react";
import styled from "styled-components";

type BtnVariant = "outlined" | "filled";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  variant?: BtnVariant;
};

const Btn = styled.button<{ $variant?: BtnVariant }>`
  background: var(--color-white);
  border-radius: 18px;
  color: var(--color-dark);
  font-size: 24px;
  line-height: 32px;
  padding: 20px 34px;
  @media screen and (max-width: 750px) {
    border-radius: 12px;
    font-size: 20px;
    line-height: 26px;
    padding: 12px 18px;
  }
`;

const Button = (props: ButtonProps): JSX.Element => {
  const { variant = "outlined" } = props;
  return <Btn $variant={variant} {...props} />;
};

export default Button;
