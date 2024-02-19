import { ApiResponse } from "@/types/global";
import { rootApi } from "../api";
import { LanguageResponse, TranslateListResoponse, SaveTranslateDataType } from "@/types/language";
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { AppInitialProps } from "next/app";

interface LanguageProps {
  language: LanguageResponse | null;
  translateList: TranslateListResoponse | null;
}

const initialState: LanguageProps = {
  language: null,
  translateList: null,
};

export const languageApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getLanguageData: build.mutation<
      ApiResponse<LanguageResponse>,
      {
        pageNumber: number;
        pageSize: number;
        languageName?: string;
        textDirection?: string;
        status?: number;
        sword?: string;
      }
    >({
      query: (arg: {
        pageNumber: number;
        pageSize: number;
        languageName?: string;
        textDirection?: string;
        status?: number;
        sword?: string;
      }) => ({
        url: `/admin/language/list?pageNumber=${arg.pageNumber}&pageSize=${arg.pageSize
          }${arg.languageName ? `&merchantName=${arg.languageName}` : ""
          }${arg.textDirection ? `&branchName=${arg.textDirection}` : ""
          }${arg.status ? `&status=${arg.status}` : ""
          }${arg.sword ? `&sword=${arg.sword}` : ""
          }`, // now we pass parameters in the url
        method: "GET",
      }),
      invalidatesTags: ["Language"],
    }),
    getTranslateList: build.mutation<
      ApiResponse<TranslateListResoponse>,
      {
        pageNumber: number;
        pageSize: number;
        languageId?: number;
      }
    >({
      query: (arg: {
        pageNumber: number;
        pageSize: number;
        languageId?: number;
      }) => ({
        url: `/admin/translate/list?pageNumber=${arg.pageNumber
          }&pageSize=${arg.pageSize}${arg.languageId ? `&languageId=${arg.languageId}` : ""
          }`,
        method: "GET",
      }),
      invalidatesTags: ["Language"],
    }),
    saveTranslate: build.mutation<ApiResponse<void>, SaveTranslateDataType>({
      query: (SaveTranslateDataProps) => ({
        url: `/admin/tanslate/save`,
        method: "POST",
        body: SaveTranslateDataProps,
      }),
      invalidatesTags: ["Language"],
    }),
  }),
});

export const language = createSlice({
  name: "language",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<LanguageProps>) => {
    builder.addMatcher(
      languageApi.endpoints.getLanguageData.matchFulfilled,
      (state, action) => {
        state.language = action?.payload?.data;
        // state.dashboard = null;
      }
    );
    builder.addMatcher(
      languageApi.endpoints.getTranslateList.matchFulfilled,
      (state, action) => {
        state.translateList = action?.payload?.data;
      }
    );
  },
}).reducer;

export const {
  useGetLanguageDataMutation,
  useGetTranslateListMutation,
  useSaveTranslateMutation
} = languageApi;
