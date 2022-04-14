import Fees_catalogue from '../models/fees';
import { FeeType } from '../models/types';

// Get all classes fees
export async function getAllFees(): Promise<FeeType[]> {
    return await Fees_catalogue.find({});
}

// Get single class fee
export async function getClassFee(classId: string): Promise<FeeType> {
  // try {
    const fee = await Fees_catalogue.findOne({class: classId});
    return fee;
  // } catch (error) {
  //   return error;
  // }
}