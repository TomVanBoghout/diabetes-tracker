import {IMeasurement} from "./measurement";
/**
 * Created by ToVB on 5/01/2017.
 */
export interface IDay {
  date: string;
  morning:{
    valueInitial: string,
    valueAfter: string,
    treatment: string,
    treatmentExtra: string
  },
  noon:{
    valueInitial: string,
    valueAfter: string,
    treatment: string,
    treatmentExtra: string
  }
  evening:{
    valueInitial: string,
    valueAfter: string,
    treatment: string,
    treatmentExtra: string
  }
  night:{
    valueInitial: string,
    valueAfter: string,
    treatment: string,
    treatmentExtra: string
  }
}
