import { IInsurance } from "./insurance";

export interface IUser {
    uid: string,
    email: string,
    firstName: string,
    lastName: string,
    money: number;
    createdInsurances: number;
    vip: boolean;
    _v: number;
}
