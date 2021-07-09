import { LoanType } from './loantype';

export class LoanRequest {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    zipcode: string;
    city: string;
    loanType: LoanType;
    amount: number;
}
