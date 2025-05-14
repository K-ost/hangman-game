import { JSX } from "react";

type CatButtonProps = {
  img: string;
  name: string;
  handler: () => void;
};

const CatButton = (props: CatButtonProps): JSX.Element => {
  const { img, name, handler } = props;

  return (
    <div
      onClick={() => handler()}
      className="bg-white rounded-lg lg:rounded-2xl text-dark flex flex-col max-w-[300px] text-lg lg:text-2xl text-center items-center justify-center p-2 lg:p-4 cursor-pointer transition duration-200 ease-in transform hover:scale-[1.05]"
    >
      <img src={img} alt="" className="block w-[50px] h-[80px] mx-auto object-contain" />
      {name}
    </div>
  );
};

export default CatButton;
