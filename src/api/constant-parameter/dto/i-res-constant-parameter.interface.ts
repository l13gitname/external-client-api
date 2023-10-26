export interface IResConstantParameter {
  status: number;
  message: string;
  data: IResConstantParameterData
}

export interface IResConstantParameterData {
  dsr: number;
  fold: number;
}