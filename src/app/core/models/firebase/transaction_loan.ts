import { Meta, Address } from './shared';
import { Project } from '.';

///<fb> /transaction_loan
export class LoanTransaction {
    uid: string;
    //Product
    productId: string;
    productType: 'Raw Land' | 'Developed Land' | 'Installation' | 'Commercial Space' | 'Manufactured Home';
    productDescription: string;
    productSugestedPrice: number;
    productProject: string;
    productUnit: string;
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
    loanStartDate: Date;
    maturityDate: Date;
    assetValue: number;
    downPayment: number;
    financeAmount: number;
    collectEscrow: boolean;
    initialEscrow: number;
    //Calculations
    saleMargin: number;
    //Core
    project: Project;
    address: Address;
    calc: LoanCalculations;
    meta: Meta;
}

///<fb> /transaction_loan calc{}
export interface LoanCalculations {
    //For Transaction
    monthlyPmt: number;
    totalInterest: number;
    totalCostOfFinance: number;
    totalPayments: number;
    totalCost: number;
    //For Collections
    loanToValue: number;
    loanBalance: number;
    escrowBalance: number;
    interestPaid: number;
    principalPaid: number;
}

///<fb> /transaction_loan/:id/escrow
export class EscrowPayment {
    uid: string;
    date: Date;
    accountingCode: string;
    transcation: 'Credit' | 'Debit';
    amount: number;
}

///<fb> /transaction_loan/:id/payments
export class loanPayment {
    uid: string;
    date: Date;
    accountingCode: string;
    amount: number;
    period: number;
}

///<fb> /transaction_loan/:id/schedules
export class loanSchedule {
    period: number;
    periodStartDate: Date;
    periodEndDate: Date;
    periodDueDate: Date;
    paymentDue: number;
    interestDue: number;
    principalDue: number;
    balance: number;
}

/*
LINKS:
    Products : productId,
    Products : productType,
    Products : productDescription,
    Products : productSugestedPrice,
    Products : unitCost,
    Products : productProject,
    Products : prodcutUnit,
    Brokers : brokerPersonId,
    Brokers : brokerPersonName,
    Brokers : brokerCompany,
    Clients : clientId,
    Clients : clientLegalName,
    Clients : cosignerLegalName => Relations | Dependants
    Clients : guarantorLegalName => Relations | Dependants
*/