import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { Button } from 'react-bootstrap';

const TagInput: React.FC = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const handleAddTag = (event:React.MouseEvent<HTMLButtonElement>) => {
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
        <div>
            <div>
                {tags.map((tag, index) => (
                    <span key={index} style={{ margin: '0.1rem', padding: '0.1rem' }}>
                        {tag}
                        <button type="button" className='remove-tag' onClick={() => removeTag(index)}>X</button>
                    </span>
                ))}
            </div>
            <input
                placeholder='Voeg tags toe'
                type="text"
                value={input}
                onChange={handleInputChange}
            />
            <Button className='ml-4' style={{height: 40}} onClick={handleAddTag}>Voeg tag toe</Button>{}
        </div>
    );
};

export default TagInput;