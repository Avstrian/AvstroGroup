import { IUser } from "./user";

export interface IInsurance {
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
}