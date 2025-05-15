import { JSX, ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="mx-auto px-4 lg:px-8 flex flex-col max-w-[1200px] min-h-[100vh]">
      <Header />
      <div className="grow-1 flex items-center justify-center pb-16">
        <div className="w-[100%]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
