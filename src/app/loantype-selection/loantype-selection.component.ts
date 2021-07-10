import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoanReason } from '../model/loanreason';
import { LoanReasonsService } from '../service/loanreasons.service';

@Component({
  selector: 'app-loantype-selection',
  templateUrl: './loantype-selection.component.html',
  styleUrls: ['./loantype-selection.component.css']
})
export class LoantypeSelectionComponent implements OnInit {

   loanReasons: LoanReason[];
   closeModal: string;

   constructor(private loanReasonsService: LoanReasonsService, private modalService: NgbModal) {
   }

     ngOnInit() {
       this.loanReasonsService.findAll().subscribe(data => {
         this.loanReasons = data;
       });
     }


     triggerModal(content : any) {
         this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
           this.closeModal = `Closed with: ${res}`;
         }, (res) => {
           this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
         });
     }

     private getDismissReason(reason: any): string {
       if (reason === ModalDismissReasons.ESC) {
         return 'by pressing ESC';
       } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
         return 'by clicking on a backdrop';
       } else {
         return  `with: ${reason}`;
       }
     }
}
