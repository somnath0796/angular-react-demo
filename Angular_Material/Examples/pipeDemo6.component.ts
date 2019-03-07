import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tempConvert'
})
export class TempConvertPipe implements PipeTransform{
    transform(value: number) : number {
      if(value && !isNaN(value))
		return  (value * 9/5) + 32;
    }
}