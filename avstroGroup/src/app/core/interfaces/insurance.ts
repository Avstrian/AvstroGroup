import { IUser } from "./user";

export interface IInsurance {
    _id: string,
    vehicleType: string,
    volume: number,
    power: number,
    regNumber: string,
    ownerAge: number,
    ownerExperience: number,
    owner: IUser
    cost: number,
    paymentType: string,
    timesLeftToPay: number,
    _v: number
}