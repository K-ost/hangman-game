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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .app-center {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }
  @media screen and (max-width: 750px) {
    padding: 0 16px;
  }
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
