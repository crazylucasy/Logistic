import { ApiResponse } from "@/types/global";
import { rootApi } from "../api";
import {
  CountryResponse,
  LanguageResponse,
  AddCountryDataProps,
  CountryCurrencyListResponse,
} from "@/types/country";
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

interface CountryProps {
  country: CountryResponse | null;
  language: LanguageResponse[] | [];
  countryCurrencyList: CountryCurrencyListResponse | [];

}

const initialState: CountryProps = {
  country: null,
  language: [],
  countryCurrencyList: [],
};

export const countryApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getCountryData: build.mutation<
      ApiResponse<CountryResponse>,
      {
        pageNumber: number;
        pageSize: number;
        countryName?: string;
        language?: string;
        currency?: string;
        status?: number;
        sword?: string;
      }
    >({
      query: (arg: {
        pageNumber: number;
        pageSize: number;
        countryName?: string;
        language?: string;
        currency?: string;
        status?: number;
        sword?: string;
      }) => ({
        url: `/admin/country/list?pageNumber=${arg.pageNumber}&pageSize=${arg.pageSize
          }${arg.countryName ? `&merchantName=${arg.countryName}` : ""
          }${arg.language ? `&merchantName=${arg.language}` : ""
          }${arg.currency ? `&branchName=${arg.currency}` : ""
          }${arg.status ? `&status=${arg.status}` : ""
          }${arg.sword ? `&sword=${arg.sword}` : ""
          }`, // now we pass parameters in the url
        method: "GET",
      }),
      invalidatesTags: ["Country"],
    }),
    getCountryLanguageData: build.mutation<ApiResponse<LanguageResponse[]>, {}>(
      {
        query: () => ({
          url: `/admin/country/language/list`, // now we pass parameters in the url
          method: "GET",
        }),
        invalidatesTags: ["Country"],
      }
    ),
    addCountry: build.mutation<ApiResponse<void>, AddCountryDataProps>({
      query: (AddCountryDataProps) => ({
        url: `/admin/country/save`, // now we pass parameters in the url
        method: "POST",
        body: AddCountryDataProps,
      }),
      invalidatesTags: ["Country"],
    }),
    getCountryCurrencyList: build.mutation<ApiResponse<CountryCurrencyListResponse>, {}>({
      query: () => ({
        url: `/admin/country/currency/list`, // now we pass parameters in the url
        method: "GET",
      }),
      invalidatesTags: ["Country"],
    }),
  }),
});

export const country = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CountryProps>) => {
    builder.addMatcher(
      countryApi.endpoints.getCountryData.matchFulfilled,
      (state, action) => {
        state.country = action?.payload?.data;
      }
    );
    builder.addMatcher(
      countryApi.endpoints.getCountryLanguageData.matchFulfilled,
      (state, action) => {
        state.language = action?.payload?.data;
      }
    );
    builder.addMatcher(
      countryApi.endpoints.getCountryCurrencyList.matchFulfilled,
      (state, action) => {
        state.countryCurrencyList = action?.payload?.data;
        // state.dashboard = null;
      }
    );
  },
}).reducer;

export const {
  useGetCountryDataMutation,
  useGetCountryLanguageDataMutation,
  useAddCountryMutation,
  useGetCountryCurrencyListMutation
} = countryApi;
