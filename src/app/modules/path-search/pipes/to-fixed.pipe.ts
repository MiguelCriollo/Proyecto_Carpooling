import { Pipe, PipeTransform } from '@angular/core';

export enum Direction {
  DOWN = 'down',
  UP = 'up',
}

@Pipe({
  name: 'toFixed',
})
export class ToFixedPipe implements PipeTransform {
  transform(
    value: string,
  ): string {
    return value.slice(0, 5);
  }
}
