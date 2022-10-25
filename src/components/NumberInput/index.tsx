import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { NumberInputWrapper } from "./styles";

export function NumberInput() {
  const [number, setNumber] = useState<number>(1);

  const handleMinusClick = () => {
    setNumber((number) => number - 1);
  };

  const handlePlusClick = () => {
    setNumber((number) => number + 1);
  };

  return (
    <NumberInputWrapper>
      <button onClick={handleMinusClick}>
        <Minus weight="fill" />
      </button>
      <span>{number}</span>
      <button onClick={handlePlusClick}>
        <Plus weight="fill" />
      </button>
    </NumberInputWrapper>
  );
}
