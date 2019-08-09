import { Meta, Address } from './shared';
import { ProductTypes, ProductStatuses, ModelTypes, DimUnits } from '../hcdata/product-options'
import { Project } from '.';

///<fb> /products
export class Product {
    uid: string;
    //Details
    productType: ProductTypes; // 'Raw Land' | 'Developed Land' | 'Installation' | 'Commercial Space' | 'Manufactured Home';
    productStatus: ProductStatuses; // 'Available' | 'Not Available' | 'PreSale';
    modelType: ModelTypes;// 'Lease' | 'Sale';
    description?: string;
    imageURL?: string;
    quantity: number; 
    basePrice: number
    suggestedPrice: number;
    unitCost: number;
    dimensions: number;
    dimUnits: DimUnits; // 'acres' | 'ha' | 'sqft' | 'm2' | 'ft' | 'm';
    makeReference: string;
    modelReference: string;
    internalUnit: string;
    internalBlock: string;
    internalPhase: string;
    //Core
    calc: ProductCalculations;
    project: Project;
    address: Address;
    meta: Meta;
}

///<fb> /transaction_loan calc{}
export interface ProductCalculations {
    stock: number; //calc quantity - sold
}

/*
LINKS:
    Projects : project

CALC_FIELDS:
    stock,
*/