import {
  ChangeEvent,
  KeyboardEvent,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import Badge from "@/components/Elements/Badge";

type InputWithBadgesProps = {
  onChange?: (newBadges: string[]) => void;
  onInputValueChange?: (newValue: string) => void;
  greenBadges?: string[];
  defaultValue?: string[];
  value?: string[];
  placeholder?: string;
};

const InputWithBadges = (props: InputWithBadgesProps) => {
  const {
    onInputValueChange,
    placeholder,
    greenBadges,
    onChange,
    defaultValue,
    value,
  } = props;
  const [badges, setBadges] = useState<string[]>(defaultValue || []);
  const [inputValue, setInputValue] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);

  const addBadge = (newBadge: string) => {
    const newBadges = [...badges, newBadge.trim()];
    setBadges(newBadges);
    if (onChange) {
      onChange(newBadges);
    }
  };

  const removeBadge = (badgeToRemove: string) => {
    const newBadges = badges.filter((badge) => badge !== badgeToRemove);
    setBadges(newBadges);
    if (onChange) {
      onChange(newBadges);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onInputValueChange) {
      onInputValueChange(e.target.value);
    }
  };

  const onInputKeyDown: KeyboardEventHandler = (
    e: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter" || e.code === "Enter") {
      if (!badges.includes(inputValue)) addBadge(inputValue);
      setInputValue("");
      if (onInputValueChange) onInputValueChange("");
    } else if (
      (e.key === "Backspace" || e.code === "Backspace") &&
      !inputValue
    ) {
      const newBadges = badges.slice(0, badges.length - 1);
      setBadges(newBadges);
      if (onChange) {
        onChange(newBadges);
      }
    }
  };

  useEffect(() => {
    if (value) {
      setBadges(value);
    }
  }, [value]);

  return (
    <div
      className={`relative flex flex-row flex-wrap justify-start items-center text-gray-50 bg-gray-500 min-h-10 mb-2 rounded-lg px-4 transition duration-200 border-2 ${focused ? " border-blue-500" : " border-transparent"}`}
    >
      {badges.map((it) => (
        <span
          key={it}
          className="p-1 first:pl-0 cursor-pointer select-none"
          onClick={() => removeBadge(it)}
        >
          <Badge
            style={
              !greenBadges ||
              !greenBadges.length ||
              !!greenBadges.find((greenBadge) =>
                greenBadge.toLowerCase().includes(it.toLowerCase()),
              )
                ? "green"
                : "red"
            }
          >
            {it}
          </Badge>
        </span>
      ))}
      <input
        type="text"
        className="flex-1 border-0 outline-none text-gray-50 bg-gray-500 box-border p-1 last:pr-0"
        style={{ minWidth: "125px" }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={
          !inputValue && (!badges || !badges.length) ? placeholder : ""
        }
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={onInputKeyDown}
      />
    </div>
  );
};

export default InputWithBadges;
