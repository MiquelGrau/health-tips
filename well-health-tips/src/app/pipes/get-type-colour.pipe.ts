import { Pipe, PipeTransform } from '@angular/core';
import { TipType } from '../core/models/tip.interface';

@Pipe({
  name: 'getTypeColour'
})
export class GetTypeColourPipe implements PipeTransform {

  transform(type: TipType): string {
    switch (type) {
      case TipType.DoctorHealthTip: return '#ddedea';
      case TipType.FamilyHealthTip: return '#daeaf6';
      case TipType.FitnessHealthTip: return '#fce1e4';
      case TipType.InsuranceHealthTip: return '#fcf4dd';
      case TipType.PsychoHealthTip: return '#e8dff5';
      default: return '#ddedea';
    }
  }
}
