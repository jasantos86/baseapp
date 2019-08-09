import { Meta, Address } from './shared';

///<fb> /projects
export class Company {
    uid: string;
    holdingCompany: string;
    ownerName: string;
    representativeName: string;
    address: Address;
    meta: Meta;
}