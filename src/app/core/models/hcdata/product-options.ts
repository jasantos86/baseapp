export interface ProductOptions {
    productTypesXS: [
        'Raw Land',
        'Developed Land',
        'Installation',
        'Commercial Space',
        'Manufactured Home'
    ]
    productStatuses: [
        'Available',
        'Not Available',
        'PreSale'
    ]
    modelTypes: [
        'Lease',
        'Sale'
    ]
    dimUnits: [
        'acres',
        'ha',
        'sqft',
        'm2',
        'ft',
        'm'
    ]
}

export enum ProductTypes {
    'Raw Land',
    'Developed Land',
    'Installation',
    'Commercial Space',
    'Manufactured Home'
}

export enum ProductStatuses {
    'Available',
    'Not Available',
    'PreSale'
}

export enum ModelTypes {
    'Lease',
    'Sale'
}

export enum DimUnits {
    'acres',
    'ha',
    'sqft',
    'm2',
    'ft',
    'm'
}