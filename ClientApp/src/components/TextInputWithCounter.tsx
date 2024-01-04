import React, { useEffect, useState } from "react";

interface Props {
  maxLength?: number;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInputWithCounter = ({
  onChange = () => {},
  maxLength = 300,
  placeholder = "Bericht",
  value = "",
}: Props) => {
  const [privateValue, setPrivateValue] = useState(value);

  useEffect(() => {
    setPrivateValue(value);
  }, [value]);

  const charsLeft = maxLength - privateValue.length;

  return (
    <div role="text-input-counter">
      <textarea
        className="form-control"
        style={{ height: "120px" }}
        value={privateValue}
        onChange={(event) => {
          setPrivateValue(event.target.value);
          onChange(event);
        }}
        maxLength={maxLength}
        placeholder={placeholder}
      ></textarea>
      <div>{charsLeft} characters left</div>
    </div>
  );
};

export default TextInputWithCounter;
