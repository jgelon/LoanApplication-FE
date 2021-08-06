import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoanRequest } from '../../model/loanrequest';
import { LoanType } from '../../model/loantype';
import { LoanRequestService } from '../../service/loanrequests.service';
import { LoanTypesService } from '../../service/loantypes.service';
import { ConfigService } from "../../service/config.service";

@Component({
  selector: 'app-request-a-loan-simple',
  templateUrl: './request-a-loan-simple.component.html',
  styleUrls: ['./request-a-loan-simple.component.css']
})
export class RequestALoanSimpleComponent implements OnInit {

  loanTypes: LoanType[];
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  genders: string[];
  incomeTypes: string[];
  maritalStates: string[];

  step: number = 1;

  submitted: boolean = false;
  requestId: number;

  constructor(
    private _formBuilder: FormBuilder,
    private _loanTypesService: LoanTypesService,
    private _loanRequestsService: LoanRequestService,
    private _configService: ConfigService
  ) {}

  ngOnInit() {
    this._configService.genders().subscribe(data => {
      this.genders = data;
    });
    this._configService.maritalstatus().subscribe(data => {
      this.maritalStates = data;
    });
    this._configService.incomeTypes().subscribe(data => {
      this.incomeTypes = data;
    });

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
      maritalStatus: ['', Validators.required],
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

  goToStep2() {
    if(this.firstFormGroup.status == 'VALID'){
      console.log(this.firstFormGroup.value);
      this.step = 2;
    }
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
      loanRequest.maritalStatus = this.thirdFormGroup.value.maritalstatus;
      loanRequest.loanType = this.firstFormGroup.value.loanType;
      loanRequest.amount = this.firstFormGroup.value.amount;
      this._loanRequestsService.newRequest(loanRequest).subscribe(data => {
        console.log(data);
        this.submitted = true;
        this.requestId = data.id;
      });
  }
}
