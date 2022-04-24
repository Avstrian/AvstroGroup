import { IInsurance } from "./insurance";

export interface IUser {
    _id: string,
    email: string,
    firstName: string,
    lastName: string,
    money: number;
    insurances: IInsurance[],
    review: String,
    createdInsurances: number;
    vip: boolean;
    _v: number;
}
