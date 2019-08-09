import { Meta, Address, PhoneNumber } from './shared';

///<fb> /clients
export class Client {
    uid: string;
    clientNumber: number;
    firstName: string;
    lastName: string;
    gender: 'Male' | 'Female';
    maritalStatus: string;
    birthDate: Date;
    occupationType: 'Student' | 'Self-Employed' | 'Employed' | 'Housewife' | 'Retired' | 'None';
    creditScore: number;
    citizen: boolean;
    resident: boolean;
    bankrupsy: boolean;
    foreclosure: boolean;
    employmentHistory: Employment[];
    dependants: Dependant[];
    addresses: Address[];
    phoneNumbers: PhoneNumber[];
    clientRelationships: Relation[];
    meta: ClientMeta;
}

///<fb> /clients EmploymentMap{}
export class Employment {
    employType: 'Self/Freelance' | 'Company Employee';
    employCompany: string;
    industry: string;
    ocupationDesc: string;
    monthlyIncome: number;
    startDate: Date;
    endDate: Date | 'Ongoing';
}

///<fb> /clients DependantsMap{}
export class Dependant {
    firstName: string;
    lastName: string;
    gender: 'Male' | 'Female';
    birthDate: Date;
    age: number;
    occupation: 'Student' | 'Self-Employed' | 'Employed' | 'Housewife' | 'Retired' | 'None';
}

///<fb> /clients RelationshipsMap{}
export class Relation {
    uid: string;
    firstName: string;
    lastName: string;
    relationship: 'Parent' | 'Children' | 'GrandParent' | 'Sibling' | 'Cousin' | 'Other Family' | 'Friend' | 'Other';
}

///<fb> /clients clientMeta{}
export interface ClientMeta extends Meta {
    clientNameInitials: string;
    clientLegalName: string;
    clientDirectoryName: string;
    clientDirectoryShortName: string;
    clientAge: number;
    clientDependants: number;
}

/*
LINKS:
    Clients : Relations.uid

CALC_FIELDS:
    meta,
    Dependant.age,
*/