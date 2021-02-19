import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separate'
})
export class SeparatePipe implements PipeTransform {

  transform(value: string): string {
    const arr: string[] = value.split('');
    const res: string[] = arr.slice();
    let count = 0;
    arr.forEach((item, index) => {
      if (item === item.toUpperCase()) {
        res.splice(count, 0, ' ');
        count++;
      }
      count++;
    });
    return res.join('');
  }
}
