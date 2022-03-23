import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldText'
})
export class BoldTextPipe implements PipeTransform {

  transform(value: string): any {
    return '<b>' + value + '</b>';
  }

}
