import { ApiResponse } from "@/types/global";
import { rootApi } from "../api";
import { BranchResponse, UpdateBranchState, } from "@/types/branch";
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

interface DashboardProps {
  branch: BranchResponse | null;
}

const initialState: DashboardProps = {
  branch: null,
};

export const branchApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getBranchData: build.mutation<
      ApiResponse<BranchResponse>,
      {
        pageNumber: number;
        pageSize: number;
        merchantName?: string;
        branchName?: string;
        status?: number;
        sword?: string;
      }
    >({
      query: (arg: {
        pageNumber: number;
        pageSize: number;
        merchantName?: string;
        branchName?: string;
        status?: number;
        sword?: string;
      }) => ({
        url: `/admin/branch/list?pageNumber=${arg.pageNumber}&pageSize=${
          arg.pageSize
        }${arg.merchantName ? `&merchantName=${arg.merchantName}` : ""}${
          arg.branchName ? `&branchName=${arg.branchName}` : ""
        }${arg.status ? `&status=${arg.status}` : ""}${
          arg.sword ? `&sword=${arg.sword}` : ""
        }`, // now we pass parameters in the url
        method: "GET",
      }),
      invalidatesTags: ["Branch"],
    }),

    updateBranchState: build.mutation<ApiResponse<void>, UpdateBranchState>(
      {
        query: (UpdateBranchState) =>({
          url: `/admin/branch/status/update`,
          method: "POST",
          body: UpdateBranchState,
        }),
        invalidatesTags: ["Branch"],
      }
    ),
  }),
});

export const branch = createSlice({
  name: "branch",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<DashboardProps>) => {
    builder.addMatcher(
      branchApi.endpoints.getBranchData.matchFulfilled,
      (state, action) => {
        state.branch = action?.payload?.data;
      }
    );
  },
}).reducer;

export const { useGetBranchDataMutation, useUpdateBranchStateMutation } = branchApi;
