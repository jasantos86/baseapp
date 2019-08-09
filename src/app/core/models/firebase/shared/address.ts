export interface Address {
    addressName?: string;
    street: string;
    externalUnit?: string;
    internalUnit?: string;
    state: string;
    city: string;
    county?: string;
    country: string;
    zip: number;
}
