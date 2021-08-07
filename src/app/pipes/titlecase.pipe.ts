import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCase'
  })
  export class MyTitleCasePipe implements PipeTransform {
    titleCasePipe = new TitleCasePipe()
  
    transform(value:any) {
       return this.titleCasePipe.transform(value.replace("_", " "))
    }
  
  }