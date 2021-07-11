import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoanRequest } from 'src/app/model/loanrequest';
import { LoanType } from 'src/app/model/loantype';
import { LoanRequestService } from 'src/app/service/loanrequests.service';
import { LoanTypesService } from 'src/app/service/loantypes.service';

@Component({
  selector: 'app-request-a-loan',
  templateUrl: './request-a-loan.component.html',
  styleUrls: ['./request-a-loan.component.css']
})
export class RequestALoanComponent implements OnInit {

  loanTypes: LoanType[];
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  genders: string[] = ['Male','Female','Other'];
  incometypes: string[] = ['Temporary contract','Permanent contract','Self-employed','No income'];
  maritialstates: string[] = ['Single', 'Married', 'Registered partners', 'Living together'];

  submitted: boolean = false;

  constructor(
    private _formBuilder: FormBuilder, 
    private _loanTypesService: LoanTypesService,
    private _loanRequestsService: LoanRequestService
  ) {}
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      loanType: ['', Validators.required],
      amount: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      knowledge: ['', [Validators.required, Validators.pattern("^yes$")]],
    });
    this.thirdFormGroup = this._formBuilder.group({
      gender: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      income: ['', Validators.required],
      maritialstatus: ['', Validators.required],
      incometype: ['', Validators.required]
    });
    this._loanTypesService.findAll().subscribe(data => {
      this.loanTypes = data;
    });
  }

  get loanType() {
    return this.firstFormGroup.value.loanType
  }
  get amount() {
    return this.firstFormGroup.value.amount
  }
  
  submit(){
      let loanRequest = new LoanRequest();
      loanRequest.gender = this.thirdFormGroup.value.gender;
      loanRequest.firstName = this.thirdFormGroup.value.firstName;
      loanRequest.lastName = this.thirdFormGroup.value.lastName;
      loanRequest.address = this.thirdFormGroup.value.address;
      loanRequest.zipcode = this.thirdFormGroup.value.zipcode;
      loanRequest.city = this.thirdFormGroup.value.city;
      loanRequest.dob = this.thirdFormGroup.value.dob;
      loanRequest.income = this.thirdFormGroup.value.income;
      loanRequest.incomeType = this.thirdFormGroup.value.incomeType;
      loanRequest.maritialStatus = this.thirdFormGroup.value.maritialStatus;
      loanRequest.loanType = this.firstFormGroup.value.loanType;
      loanRequest.amount = this.firstFormGroup.value.amount;
      this._loanRequestsService.newRequest(loanRequest).subscribe(data => {
        console.log(data);
        console.log("Submitted");
        // this.submitted = true;
      });
  }
}
