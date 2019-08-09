import { Meta, Address } from './shared';

/// <fb> /users
export class User {
    uid: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
    photoURL?: string;
    meta: UserMeta;
}

/// <fb> /users/:id/admin/0
export interface AdminDetails {
    enabled: boolean;
    roles: Roles;
}
export interface Roles {
    viewer: boolean;
    admin?: boolean;
    staff?: boolean;
    investor?: boolean;
    partner?: boolean;
    sales?: boolean;
    salesmgr?: boolean;
}

/// <fb> /users/:id/details/0
export interface PrivateDetails {
    email: string;
    homeAddress?: Address;
    officeAddress?: Address;
    homePhone?: number;
    mobilePhone?: number;
    officePhone?: number;
    companyAffiliation?: string;
    companyAffId?: string;
}

/// <fb> /users/:id/preferences
export interface UserPreferences {
    colorScheme: string;
}

export interface UserMeta extends Meta {
    lastLogin: Date;
}
