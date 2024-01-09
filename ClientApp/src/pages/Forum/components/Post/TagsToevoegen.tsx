import React, { useState, KeyboardEvent, ChangeEvent, useEffect } from "react";
import { Badge, Button } from "react-bootstrap";

interface Props {
  previousTags?: string[];
  onChange?: (taglist: Array<string>) => void;
}

const TagInput = ({ onChange = () => {}, previousTags = [] }: Props) => {
  const [tags, setTags] = useState<string[]>(previousTags);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    setTags(previousTags);
  }, [previousTags]);

  useEffect(() => {
    onChange(tags);
  }, [tags]);

  const handleAddTag = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (input.trim()) {
      setTags((prevTags) => [...prevTags, input]);
      setInput("");
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
      <span className="d-flex gap-3" role="tag-row">
        {tags.map((tag, index) => (
          <span
            className="d-flex flex-row gap-1 align-items-center"
            key={index}
          >
            <Badge
              key={index}
              className="badge-color hover-pointer"
              text="light"
              bg=""
              pill={true}
              onClick={() => removeTag(index)}
            >
              {tag + " | X"}
            </Badge>
          </span>
        ))}
      </span>

      <div className="d-flex align-items-center gap-2">
        <input
          placeholder="Voeg tags toe"
          type="text"
          value={input}
          onChange={handleInputChange}
          role="tag-input"
        />
        <Button size="sm" className="fw-bold" onClick={handleAddTag}>
          Voeg tag toe
        </Button>
      </div>
    </>
  );
};

export default TagInput;
