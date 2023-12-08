import ILike from "../../interfaces/ILike";

export function postLike(postId: number, profileId: number) {
    const like = {
        ForumPostID: postId,
        ProfileID: profileId,
    };

    fetch(`${process.env.REACT_APP_API_URL}/like`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(like),
    });
}

export function deleteLike(postId: number, profileId: number) {
    fetch(`${process.env.REACT_APP_API_URL}/forumpost/${postId}`)
        .then((response) => response.json())
        .then((data) =>
            fetch(`${process.env.REACT_APP_API_URL}/like/${data.likes.find((like: ILike) => like.profileID === profileId)?.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
        );
}