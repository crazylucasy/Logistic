import { ListDataResponse } from "./global";
export interface BranchDataType {
  id: number;
  merchantName: string;
  branchName: string;
  qrUrl: string;
  visitCnt: number;
  feedbackCnt: number;
  status?: string;
}

export interface BranchSearchType {
  merchantName?: string;
  branchName?: string;
  status?: number;
}

export interface UpdateBranchState {
  id: number;
  status: number;
}
export interface BranchResponse extends ListDataResponse<BranchDataType[]> {}
