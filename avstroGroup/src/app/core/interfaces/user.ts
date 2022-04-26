import { IInsurance } from "./insurance";
import { IReview } from "./review";

export interface IUser {
    _id: string,
    email: string,
    firstName: string,
    lastName: string,
    money: number;
    insurances: IInsurance[],
    review: IReview,
    createdInsurances: number;
    vip: boolean;
    _v: number;
}
