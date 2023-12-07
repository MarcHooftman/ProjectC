import ITraining from "../interfaces/ITraining";

export function filterByTag(array: ITraining[], tag: string) {
    return array.filter((post) => post.tags.some((t) => t.name.toLowerCase().includes(tag.toLowerCase())))};