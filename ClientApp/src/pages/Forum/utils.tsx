import ILike from "../../interfaces/ILike";
import { getApiUrl } from "../../utils/getApiUrl";

export function postLike(postId: number, profileId: number) {
    const like = {
        ForumPostID: postId,
        ProfileID: profileId,
    };

    fetch(`${getApiUrl()}/like`, {
        method: "POST",
        headers: {
            "ngrok-skip-browser-warning": "1",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(like),
    });
}

export function deleteLike(postId: number, profileId: number) {
    fetch(`${getApiUrl()}/forumpost/${postId}`,
        {
            headers: {
                "ngrok-skip-browser-warning": "1",
            }
        },)
        .then((response) => response.json())
        .then((data) =>
            fetch(`${getApiUrl()}/like/${data.likes.find((like: ILike) => like.profileID === profileId)?.id}`, {
                method: "DELETE",
                headers: {
                    "ngrok-skip-browser-warning": "1",
                    "Content-Type": "application/json",
                },
            })
        );
}