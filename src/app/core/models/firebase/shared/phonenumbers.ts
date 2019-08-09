export interface PhoneNumber {
    numberLocation: string;
    numberType: 'land' | 'mobile';
    phone: number;
    numberDesc?: string;
}
