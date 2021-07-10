import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-request-a-loan',
  templateUrl: './request-a-loan.component.html',
  styleUrls: ['./request-a-loan.component.css']
})
export class RequestALoanComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      amount: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }
  
  submit(){
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value);
  }

}
