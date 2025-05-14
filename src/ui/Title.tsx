import { ComponentPropsWithRef, JSX } from "react";

const Title = (props: ComponentPropsWithRef<"h1">): JSX.Element => {
  return <h1 className="text-2xl lg:text-4xl text-center mb-2 lg:mb-4" {...props} />;
};

export default Title;
