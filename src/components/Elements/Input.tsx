"use client";

import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

type InputProps = {
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

const Input = (props: InputProps) => {
  const { value, defaultValue, onChange, className } = props;
  const [inputValue, setInputValue] = useState(value || defaultValue);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const classes = [
    "text-gray-500 bg-gray-100 border border-gray-300 rounded-md py-2",
  ];
  if (className) {
    classes.push(className);
  }

  return (
    <input
      value={inputValue}
      onChange={onInputChange}
      className={classes.join(" ")}
    />
  );
};

export default Input;
