import { useEffect, useState } from 'react'
import CommentIcon from "../../../assets/comment.svg";

interface Props {
    inputRef?: React.MutableRefObject<any>
    onClick?: () => void;
}

const CommentButton = ({ inputRef, onClick = () => { } }: Props) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
        onClick();
    }


    useEffect(() => {
        const input = (inputRef?.current as HTMLInputElement)
        if (show && input) {
            if (input.parentElement) {
                input.parentElement.hidden = false;
            } else {
                input.hidden = false
            }

            input.focus();
        } else if (input) {
            if (input.parentElement) {
                input.parentElement.hidden = true;
            } else {
                input.hidden = true;
            }
        }
    }, [show]);
    return (
        <img
            src={CommentIcon}
            className="action-icon"
            onClick={handleClick}
        />
    )
}

export default CommentButton