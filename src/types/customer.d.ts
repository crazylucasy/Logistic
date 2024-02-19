import { ListDataResponse } from "./global";
export interface CustomerSearchType {
  merchantName?: string;
  customerName?: string;
  rating?: number;
}
export interface CustomerDataType {
  id: number;
  merchantName: string;
  customerName: string;
  phone: string;
  email: string;
  rateCount: string;
}

export interface CustomerResponse
  extends ListDataResponse<CustomerDataType[]> {}
