import { Meta, Address } from './shared';
import { Project } from '.';

///<fb> /transaction_sales
export class SaleTransaction {
    uid: string;
    //Product
    productId: string;
    productType: 'Raw Land' | 'Developed Land' | 'Installation' | 'Commercial Space' | 'Manufactured Home';
    productDescription: string;
    productSugestedPrice: number;
    unitCost: number;
    //Sales
    brokerPersonId: string;
    brokerPersonName: string;
    brokerCompany: string;
    //Client
    clientId: string;
    clientLegalName: string;
    cosignerLegalName: string;
    guarantorLegalName: string;
    //Transaction Details
    saleDate: Date;
    salePrice: number;
    saleWithFinance: boolean;
    //Core
    project: Project;
    address: Address;
    calc: SaleCalculations;
    meta: Meta;
}

export interface SaleCalculations {
    saleMargin: number;
    fromSuggestedPrice: number;
}

/*
LINKS:
    Products : productId,
    Products : productType,
    Products : productDescription,
    Products : productSugestedPrice,
    Products : unitCost,

CALC_FIELDS:
    meta,
    saleMargin,
*/