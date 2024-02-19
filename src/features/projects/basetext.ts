import { ApiResponse } from "@/types/global";
import { rootApi } from "../api";
import {
  BaseTextResponse,
  BaseResponse,
  AddBaseTextDataProps,
} from "@/types/basetext";
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

interface BasetextProps {
  basetext: BaseTextResponse | null;
  searchtext: BaseResponse[] | [];
}

const initialState: BasetextProps = {
  basetext: null,
  searchtext: [],
};

export const basetextApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getBaseTextData: build.mutation<
      ApiResponse<BaseTextResponse>,
      {
        pageNumber: number;
        pageSize: number;
        baseText?: string;
        textKind?: string;
        status?: number;
        sword?: string;
      }
    >({
      query: (arg: {
        pageNumber: number;
        pageSize: number;
        baseText?: string;
        textKind?: string;
        status?: number;
        sword?: string;
      }) => ({
        url: `/admin/basetext/list?pageNumber=${arg.pageNumber}&pageSize=${
          arg.pageSize
        }${arg.baseText ? `&merchantName=${arg.baseText}` : ""}${
          arg.textKind ? `&branchName=${arg.textKind}` : ""
        }${arg.status ? `&status=${arg.status}` : ""}${
          arg.sword ? `&sword=${arg.sword}` : ""
        }`, // now we pass parameters in the url
        method: "GET",
      }),
      invalidatesTags: ["Basetext"],
    }),
    addBaseText: build.mutation<ApiResponse<void>, AddBaseTextDataProps>({
      query: (AddBaseTextDataProps) => ({
        url: `/admin/basetext/save`,
        method: "POST",
        body: AddBaseTextDataProps,
      }),
      invalidatesTags: ["Basetext"],
    }),
    deleteBaseText: build.mutation<ApiResponse<void>, { id: number }>({
      query: (arg: { id: number }) => ({
        url: `/admin/basetext/delete`,
        method: "POST",
        body: { id: arg.id },
      }),
      invalidatesTags: ["Basetext"],
    }),
  }),
});

export const basetext = createSlice({
  name: "basetext",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<BasetextProps>) => {
    builder.addMatcher(
      basetextApi.endpoints.getBaseTextData.matchFulfilled,
      (state, action) => {
        state.basetext = action?.payload?.data;
      }
    );
  },
}).reducer;

export const {
  useGetBaseTextDataMutation,
  useAddBaseTextMutation,
  useDeleteBaseTextMutation,
} = basetextApi;
