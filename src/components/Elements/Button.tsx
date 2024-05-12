import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  rounded?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  submit?: boolean;
};

const Button = ({ children, rounded, submit, onClick }: ButtonProps) => {
  const className = [
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4",
  ];
  const type = submit === true ? "submit" : "button";

  if (rounded) className.push("rounded-full");
  else className.push("rounded");

  return (
    <button className={className.join(" ")} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
