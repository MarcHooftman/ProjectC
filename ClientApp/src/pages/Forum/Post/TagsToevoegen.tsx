import React, { useState, KeyboardEvent, ChangeEvent, useEffect } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
    onChange?: (taglist: Array<string>) => void;
}

const TagInput = ({ onChange = () => { } }: Props) => {
    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    useEffect(() => {
        onChange(tags)
    }, [tags])

    const handleAddTag = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (input.trim()) {
            setTags(prevTags => [...prevTags, input]);
            setInput('');
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const removeTag = (index: number) => {
        setTags(tags.filter((_, idx) => idx !== index));
    };

    return (
        <>
            <span className="d-flex gap-3">{tags.map((tag, index) => (
                <span className="d-flex flex-row gap-1 align-items-center" key={index}>
                    {tag}
                    <Button size="sm" variant="danger" className='remove-tag' onClick={() => removeTag(index)}>X</Button>
                </span>
            ))}</span>

            <div className='d-flex align-items-center gap-2'>
                <input
                    placeholder='Voeg tags toe'
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                />
                <Button size="sm" className='' onClick={handleAddTag}>Voeg tag toe</Button>
            </div>

        </>
    );
};

export default TagInput;