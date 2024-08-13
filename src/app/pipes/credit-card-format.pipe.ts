import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat',
  standalone: true
})
export class CreditCardFormatPipe implements PipeTransform {

  transform(value: string): string {

    const patrs = value.match(/.{4}/g) || [];
    return patrs.join(' - ');
  }


  // pipe for discount
  // transform (value: number, discountValue: number = 20): number {

  //   // value = 200 //discountValue=50
  //   let div = discountValue / 100;//.5
  //   let mulValue = value * div;//200 * .5 = 100
  //   let result = value - mulValue;//200 - 100 = 100
  //   return result;
  // }

}
