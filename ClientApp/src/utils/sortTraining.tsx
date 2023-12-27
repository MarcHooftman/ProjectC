import ITraining from "../interfaces/ITraining";

export function filterData(array: ITraining[], filter: string|undefined) {
    if (filter === "" || !filter) { return array;}
    return array.filter((item) => {
        if (item.title.toLowerCase().includes(filter.toLowerCase())) return item
        if (item.tags.some(n => n.name.toLowerCase().includes(filter.toLowerCase()))) return item
    });
}