import styled from "styled-components";

export const KeyboardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin: 8px 10px;
    @media screen and (max-width: 750px) {
      margin: 4px;
    }
  }
`;
