import { ComponentPropsWithRef, JSX } from "react";

const Button = (props: ComponentPropsWithRef<"button">): JSX.Element => {
  return (
    <button
      className="bg-white rounded-lg lg:rounded-2xl text-dark text-xl lg:text-3xl py-2 px-8 lg:py-4 lg:px-12 cursor-pointer transition duration-200 ease-in hover:opacity-75"
      {...props}
    />
  );
};

export default Button;
