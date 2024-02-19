import { ListDataResponse } from "./global";
export interface BaseTextDataType {
  id: number;
  baseText: string;
  textKind: string;
}

export interface BaseTextSearchType {
  baseText?: string;
  textKind?: string;
  status?: number;
}

interface BaseResponse {
  id: number;
  value: string;
  label: string;
}
export interface AddBaseTextProp {
  id: number;
  baseText: string;
  textKind: string;
}

export interface AddBaseTextDataProps extends AddBaseTextProp {
  id: number;
}

export interface BaseTextResponse
  extends ListDataResponse<BaseTextDataType[]> {}
