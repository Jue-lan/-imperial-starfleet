import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appInterval]'
})

export class IntervalDirective {

  constructor(private ele: ElementRef) {

   }

   private makeRed(backgroundColor: string){
    this.ele.nativeElement.style.backgroundColor = backgroundColor;
   }

   private makeAqua(backgroundColor: string){
    this.ele.nativeElement.style.backgroundColor = backgroundColor;
   }

   @HostListener('mouseenter') onMouseEnter(){
     this.makeRed('red');
   }

   @HostListener('mouseleave') onMouseLeave(){
     this.makeAqua('aqua');
   }
}
