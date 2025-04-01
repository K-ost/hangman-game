import { JSX, ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 24px;
`;

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;
