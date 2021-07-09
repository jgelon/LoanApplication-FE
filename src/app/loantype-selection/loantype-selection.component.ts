import { Component, OnInit } from '@angular/core';
import { LoanType } from '../model/loantype';
import { LoanReason } from '../model/loanreason';
import { LoanTypesService } from '../service/loantypes.service';
import { LoanReasonsService } from '../service/loanreasons.service';

@Component({
  selector: 'app-loantype-selection',
  templateUrl: './loantype-selection.component.html',
  styleUrls: ['./loantype-selection.component.css']
})
export class LoantypeSelectionComponent implements OnInit {

   loanTypes: LoanType[];
   loanReasons: LoanReason[];

   constructor(private loanTypesService: LoanTypesService, private loanReasonsService: LoanReasonsService) {
   }

     ngOnInit() {
       this.loanTypesService.findAll().subscribe(data => {
         this.loanTypes = data;
       });

       this.loanReasonsService.findAll().subscribe(data => {
         this.loanReasons = data;
       });
     }

}
