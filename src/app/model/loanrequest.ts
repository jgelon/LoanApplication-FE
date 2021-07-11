import { LoanType } from './loantype';

export class LoanRequest {
    id: number;
    gender: string;
    firstName: string;
    lastName: string;
    address: string;
    zipcode: string;
    city: string;
    dob: Date;
    income: number;
    incomeType: string;
    maritialStatus: string;
    loanType: LoanType;
    amount: number;
}
