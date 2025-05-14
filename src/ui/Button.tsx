import { ComponentPropsWithRef, JSX } from "react";

type BtnVariant = "outlined" | "filled";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  variant?: BtnVariant;
};

const Button = (props: ButtonProps): JSX.Element => {
  const { variant = "outlined" } = props;
  return (
    <button
      className="bg-white rounded-lg lg:rounded-2xl text-dark text-xl lg:text-3xl py-2 px-8 lg:py-4 lg:px-12 cursor-pointer transition duration-200 ease-in hover:opacity-75"
      {...props}
    />
  );
};

export default Button;
