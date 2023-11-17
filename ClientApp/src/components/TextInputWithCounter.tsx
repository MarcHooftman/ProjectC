import React, { useState } from 'react';

interface Props {
    maxLength: number;
}

const TextInputWithCounter = ({ maxLength }: Props) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value.slice(0, maxLength));
    };

    const charsLeft = maxLength - inputValue.length;

    return (
        <div>
            <textarea
                className="form-control"
                style={{ height: '120px' }}
                value={inputValue}
                onChange={handleInputChange}
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