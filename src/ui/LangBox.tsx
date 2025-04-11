import { JSX } from "react";
import styled from "styled-components";
import { useAppStore } from "../store/useAppStore";

const Lang = styled.div<{ $inactive: boolean }>`
  margin-left: auto;
  margin-right: 20px;
  position: relative;
  opacity: ${(props) => (props.$inactive ? 0.25 : 1)};
  &::before {
    content: '""';
    display: ${(props) => (props.$inactive ? "block" : "none")};
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
`;

const Btn = styled.button<{ $active: boolean }>`
  background: var(--color-${(props) => (props.$active ? "pink" : "white")});
  color: var(--color-dark);
  border-radius: 4px;
  width: 32px;
  margin: 0 6px 0 0;
  font-size: 16px;
  line-height: 20px;
  padding: 4px 6px;
  &:disabled {
    opacity: 1;
  }
`;

const LangBox = (): JSX.Element => {
  const { lang, setLang, screen } = useAppStore();

  return (
    <Lang $inactive={screen === "game"}>
      <Btn onClick={() => setLang("en")} disabled={lang === "en"} $active={lang === "en"}>
        En
      </Btn>
      <Btn onClick={() => setLang("ru")} disabled={lang === "ru"} $active={lang === "ru"}>
        Ru
      </Btn>
    </Lang>
  );
};

export default LangBox;
