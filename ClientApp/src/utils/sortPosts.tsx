import IForumPost from "../interfaces/IForumPost";

export function sortByDate(array: IForumPost[]) {
    return array.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
}

export function filterOnlyParent(array: IForumPost[]) {
    return array.filter((post) => post.forumPostID == undefined);
}

export function filterByTag(array: IForumPost[], tag: string) {
    return array.filter((post) => post.tags.some((t) => t.name.toLowerCase().includes(tag.toLowerCase())));
}

export function filterOnlyComment(array: IForumPost[]) {
    return array.filter((post) => post.forumPostID != undefined);
}

export function filterHelpfulComment(array: IForumPost[]) {
    return filterOnlyComment(array).filter((post) => post.likes.length > 10);
}