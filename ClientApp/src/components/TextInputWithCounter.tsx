import React, { useState } from 'react';

interface Props {
    maxLength?: number;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInputWithCounter = ({ onChange = () => { }, maxLength = 300 }: Props) => {
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
                placeholder="Bericht"
            ></textarea>
            <div>
                {charsLeft} characters left
            </div>
        </div>
    );
};

export default TextInputWithCounter;