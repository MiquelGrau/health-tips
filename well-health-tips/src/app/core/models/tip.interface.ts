
export interface TipModel {
  id: number;
  type: TipType;
  title: string;
  text: string;
  upVotes: number;
  downVotes: number;
  datetime: Date;
}

export enum TipType {
  DoctorHealthTip = 'DoctorHealthTip',
  PsychoHealthTip = 'PsychoHealthTip',
  FamilyHealthTip = 'FamilyHealthTip',
  FitnessHealthTip = 'FitnessHealthTip',
  InsuranceHealthTip = 'InsuranceHealthTip',
}
