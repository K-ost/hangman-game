import { JSX } from "react";
import styled from "styled-components";
import { useAppStore } from "../store/useAppStore";
import LangBox from "../ui/LangBox";
import { useTranslation } from "react-i18next";

const Head = styled.header`
  align-items: center;
  border-bottom: 1px solid var(--color-grey);
  display: flex;
  margin: 0 0 40px;
  padding: 30px 0;
  @media screen and (max-width: 750px) {
    margin: 0 0 24px;
    padding: 10px 0;
  }
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 500;
  letter-spacing: 3px;
  margin: 0;
  text-transform: uppercase;
  @media screen and (max-width: 750px) {
    font-size: 20px;
    letter-spacing: 1px;
  }
`;

const Score = styled.div`
  align-items: center;
  display: flex;
  font-size: 22px;
  div {
    background: var(--color-white);
    border-radius: 24px;
    color: var(--color-dark);
    font-weight: 500;
    margin: 0 0 0 10px;
    padding: 4px 14px;
  }
  @media screen and (max-width: 750px) {
    font-size: 18px;
  }
`;

const Header = (): JSX.Element => {
  const { score } = useAppStore();
  const { t } = useTranslation();

  return (
    <Head>
      <Title>Hangman</Title>
      <LangBox />
      <Score>
        {t("header.score")}: <div>{score}</div>
      </Score>
    </Head>
  );
};

export default Header;
