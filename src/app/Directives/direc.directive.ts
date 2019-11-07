import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirec]'
})
export class DirecDirective {

  constructor(private elementRef:ElementRef) { 
    this.elementRef.nativeElement.style.color="blue";
  }


}