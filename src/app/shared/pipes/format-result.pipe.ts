import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'FormatResultPipe'})
export class FormatResultPipe implements PipeTransform {
  transform(value: number, exponent: string): string {
    let newStr  = '';
    if(value)
      newStr = `Result is ${value}`;
    return newStr;
  }
}