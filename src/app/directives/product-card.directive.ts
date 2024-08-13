import { Directive , ElementRef, HostListener,
   Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective implements OnChanges{
  @Input() shadowOver : string='black'
  @Input('appProductCard')  shadowOut :string = 'black'
  constructor(private el: ElementRef) { 


  // this.el.nativeElement.color = 'red';

  }
  ngOnChanges(): void {
    this.el.nativeElement.style.boxShadow = `5px 10px 8px ${this.shadowOut}`
  }

   @HostListener('mouseover') onMouseOver() {
  this.el.nativeElement.style.boxShadow = ` 5px 10px 18px ${this.shadowOver}`
    //this.el.nativeElement.color = 'green';

  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.boxShadow = `5px 10px 8px ${this.shadowOut}`
    //this.el.nativeElement.color = 'blue';
  }
}
 