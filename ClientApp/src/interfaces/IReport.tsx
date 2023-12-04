export default interface IReport {
    id?: number;
    forumPostID: number;
    profileID: number;
    spam: boolean;
    inappropriate: boolean;
    notWorkRelated: boolean;
    other: boolean;
    elaboration?: string;
}