import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoanType } from 'src/app/model/loantype';
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
  
  constructor(private _formBuilder: FormBuilder, private _loanTypesService: LoanTypesService) {}
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      loanType: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      amount: ['', Validators.required],
      stock: ['', Validators.required]
    });
    this._loanTypesService.findAll().subscribe(data => {
      this.loanTypes = data;
    });
  }
  
  submit(){
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value);
  }

}
