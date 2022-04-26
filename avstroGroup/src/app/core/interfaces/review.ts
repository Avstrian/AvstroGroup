import { IUser } from "./user";

export interface IReview {
    _id: string,
    owner: IUser,
    rating: number,
    text: string,
}