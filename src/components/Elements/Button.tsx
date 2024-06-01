import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  rounded?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  submit?: boolean;
  className?: string;
  disabled?: boolean;
};

const Button = ({
  children,
  rounded,
  submit,
  onClick,
  className,
  disabled,
}: ButtonProps) => {
  const classes = [
    "transition duration-200 bg-blue-600 hover:bg-blue-800 text-gray-100 font-bold py-2 px-4",
  ];
  const type = submit === true ? "submit" : "button";

  if (rounded) classes.push("rounded-full");
  else classes.push("rounded");

  if (className) classes.push(className);

  return (
    <button
      className={classes.join(" ")}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
