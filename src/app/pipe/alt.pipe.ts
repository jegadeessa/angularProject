import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alt'
})
export class AltPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "aaaaa";
  }

}