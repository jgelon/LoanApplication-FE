import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoanType } from '../../model/loantype';
import { LoanRequestService } from '../../service/loanrequests.service';
import { LoanTypesService } from '../../service/loantypes.service';
import { ConfigService } from "../../service/config.service";
import { NewLoanRequest } from 'src/app/model/newloanrequest';
import { CurrencyProxyPipe } from 'src/app/pipes/currency-proxy.pipe';

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

  errors: string;
  submitted: boolean = false;
  requestId: number;

  constructor(
    private _formBuilder: FormBuilder,
    private _loanTypesService: LoanTypesService,
    private _loanRequestsService: LoanRequestService,
    private _configService: ConfigService,
    private _currencyPipe: CurrencyProxyPipe
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
      amount: ['', [Validators.required, Validators.minLength(3)]]
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
      if (this.amount < this.loanType.minAmount ) {
        this.errors = "The desired amount is lower than the minimum amount ("+ this._currencyPipe.transform(this.loanType.minAmount) + ") of the selected loan type <b>"+ this.loanType.title +"</b>. You may want to choose another loan type.";
      } else {
          console.log(this.firstFormGroup.value);
          this.step = 2;
          this.errors = "";
      }
    } else {
      this.errors = "Not all fields have been provided, all fields are required.";
    }
  }

  goToStep3() {
    if(this.secondFormGroup.status == 'VALID'){
      console.log(this.secondFormGroup.value);
      this.step = 3;
      this.errors = "";
    } else {
      this.errors = "You must accept the knowledge clause.";
    }
  }

  goToStep4() {
    if(this.thirdFormGroup.status == 'VALID'){
      console.log(this.thirdFormGroup.value);
      this.step = 4;
      this.errors = "";
    } else {
      this.errors = "Not all fields have been provided, all fields are required.";
    }
  }

  back() {
    this.errors = "";
    this.step--;
  }

  isValidInput1(fieldName: string | number): boolean {
    return this.firstFormGroup.controls[fieldName].invalid &&
      (this.firstFormGroup.controls[fieldName].dirty || this.firstFormGroup.controls[fieldName].touched);
  }
  isValidInput3(fieldName: string | number): boolean {
    return this.thirdFormGroup.controls[fieldName].invalid &&
      (this.thirdFormGroup.controls[fieldName].dirty || this.thirdFormGroup.controls[fieldName].touched);
  }

  submit(){
      let loanRequest = new NewLoanRequest();
      loanRequest.gender = this.thirdFormGroup.value.gender;
      loanRequest.firstName = this.thirdFormGroup.value.firstname;
      loanRequest.lastName = this.thirdFormGroup.value.lastname;
      loanRequest.address = this.thirdFormGroup.value.address;
      loanRequest.zipcode = this.thirdFormGroup.value.zipcode;
      loanRequest.city = this.thirdFormGroup.value.city;
      loanRequest.dob = this.thirdFormGroup.value.dob;
      loanRequest.income = this.thirdFormGroup.value.income;
      loanRequest.incomeType = this.thirdFormGroup.value.incometype;
      loanRequest.maritalStatus = this.thirdFormGroup.value.maritalStatus;
      loanRequest.loanTypeId = this.firstFormGroup.value.loanType.id;
      loanRequest.amount = this.firstFormGroup.value.amount;
      this._loanRequestsService.newRequest(loanRequest).subscribe(
        data => {
          console.log(data);
          this.step = 5;
          this.submitted = true;
          this.requestId = data.id;
          this.errors = "";
        },
        error => {
            this.errors = error
        }
      );
  }
}
