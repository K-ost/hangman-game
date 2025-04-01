import { JSX } from "react";
import styled from "styled-components";
import { getImageLink } from "../utils";

type CatButtonProps = {
  img: string;
  name: string;
  handler: () => void;
};

const Button = styled.button`
  background: var(--color-white);
  border-radius: 24px;
  color: var(--color-dark);
  display: flex;
  flex-direction: column;
  font-size: 24px;
  max-width: 300px;
  padding: 10px;
  &:hover {
    transform: scale(1.05);
  }
  img {
    display: block;
    height: 80px;
    object-fit: contain;
    width: 50px;
    margin: 0 auto;
  }
`;

const CatButton = (props: CatButtonProps): JSX.Element => {
  const { img, name, handler } = props;

  return (
    <Button onClick={() => handler()}>
      <img src={getImageLink(img)} alt="" />
      {name}
    </Button>
  );
};

export default CatButton;
