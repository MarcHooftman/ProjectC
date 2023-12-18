import React, { useState } from 'react';

interface Props {
    maxLength?: number;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInputWithCounter = ({ onChange = () => { }, maxLength = 300, placeholder = "Bericht" }: Props) => {
    const [privateValue, setPrivateValue] = useState("")

    const charsLeft = maxLength - privateValue.length;

    return (
        <div>
            <textarea
                className="form-control"
                style={{ height: '120px' }}
                value={privateValue}
                onChange={(event) => {
                    setPrivateValue(event.target.value);
                    onChange(event);
                }}
                maxLength={maxLength}
                placeholder={placeholder}
            ></textarea>
            <div>
                {charsLeft} characters left
            </div>
        </div>
    );
};

export default TextInputWithCounter;