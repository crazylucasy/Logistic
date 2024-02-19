import { ApiResponse } from "@/types/global";
import { rootApi } from "../api";
import {
  MerchantResponse,
  MerchantPaymentListResponse,
  CountryListResponse,
  AddPaymentProps,
  CurrencyListResponse,
  UpdateMerchantState,
  UpdateMerchantCountry,
} from "@/types/merchant";
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

interface MerchantProps {
  merchant: MerchantResponse | null;
  merchantPaymentList: MerchantPaymentListResponse | null;
  countryList: CountryListResponse | [];
  currencyList: CurrencyListResponse | [];
}

const initialState: MerchantProps = {
  merchant: null,
  merchantPaymentList: null,
  countryList: [],
  currencyList: [],
};

export const merchantApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getMerchantData: build.mutation<
      ApiResponse<MerchantResponse>,
      {
        pageNumber: number;
        pageSize: number;
        country?: string;
        currency?: string;
        merchantName?: string;
        status?: number;
        sword?: string;
      }
    >({
      query: (arg: {
        pageNumber: number;
        pageSize: number;
        country?: string;
        currency?: string;
        merchantName?: string;
        status?: number;
        sword?: string;
      }) => ({
        url: `/admin/merchant/list?pageNumber=${arg.pageNumber}&pageSize=${
          arg.pageSize
        }${arg.country ? `&country=${arg.country}` : ""}${
          arg.currency ? `&currency=${arg.currency}` : ""
        }${arg.merchantName ? `&merchantName=${arg.merchantName}` : ""}${
          arg.status ? `&status=${arg.status}` : ""
        }${arg.sword ? `&sword=${arg.sword}` : ""}`, // now we pass parameters in the url
        method: "GET",
      }),
      invalidatesTags: ["Merchant"],
    }),
    getMerchantPaymentList: build.mutation<
      ApiResponse<MerchantPaymentListResponse>,
      {
        pageNumber: number;
        pageSize: number;
        merchantId?: number;
      }
    >({
      query: (arg: {
        pageNumber: number;
        pageSize: number;
        merchantId?: number;
      }) => ({
        url: `/admin/merchant/payment/list?pageNumber=${
          arg.pageNumber
        }&pageSize=${arg.pageSize}${
          arg.merchantId ? `&merchantId=${arg.merchantId}` : ""
        }`,
        method: "GET",
      }),
      invalidatesTags: ["Merchant"],
    }),

    addMerchantPayment: build.mutation<ApiResponse<void>, AddPaymentProps>({
      query: (AddPaymentProps) => ({
        url: `/admin/merchant/payment/save`, // now we pass parameters in the url
        method: "POST",
        body: AddPaymentProps,
      }),
      invalidatesTags: ["Merchant"],
    }),

    getCountryList: build.mutation<ApiResponse<CountryListResponse>, {}>({
      query: () => ({
        url: `/admin/merchant/country/list`, // now we pass parameters in the url
        method: "GET",
      }),
      invalidatesTags: ["Merchant"],
    }),

    getCurrencyList: build.mutation<ApiResponse<CurrencyListResponse>, {}>({
      query: () => ({
        url: `/admin/merchant/currency/list`, // now we pass parameters in the url
        method: "GET",
      }),
      invalidatesTags: ["Merchant"],
    }),

    updateMerchantState: build.mutation<ApiResponse<void>, UpdateMerchantState>(
      {
        query: (UpdateMerchantState) => ({
          url: `/admin/merchant/status/update`, // now we pass parameters in the url
          method: "POST",
          body: UpdateMerchantState,
        }),
        invalidatesTags: ["Merchant"],
      }
    ),
    updateMerchantCountry: build.mutation<
      ApiResponse<void>,
      UpdateMerchantCountry
    >({
      query: (UpdateMerchantCountry) => ({
        url: `/admin/merchant/update`, // now we pass parameters in the url
        method: "POST",
        body: UpdateMerchantCountry,
      }),
      invalidatesTags: ["Merchant"],
    }),
  }),
});

export const merchant = createSlice({
  name: "merchant",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<MerchantProps>) => {
    builder.addMatcher(
      merchantApi.endpoints.getMerchantData.matchFulfilled,
      (state, action) => {
        state.merchant = action?.payload?.data;
      }
    );
    builder.addMatcher(
      merchantApi.endpoints.getMerchantPaymentList.matchFulfilled,
      (state, action) => {
        state.merchantPaymentList = action?.payload?.data;
      }
    );
    builder.addMatcher(
      merchantApi.endpoints.getCountryList.matchFulfilled,
      (state, action) => {
        state.countryList = action?.payload?.data;
      }
    );
    builder.addMatcher(
      merchantApi.endpoints.getCurrencyList.matchFulfilled,
      (state, action) => {
        state.currencyList = action?.payload?.data;
      }
    );
  },
}).reducer;

export const {
  useGetMerchantDataMutation,
  useGetMerchantPaymentListMutation,
  useGetCountryListMutation,
  useGetCurrencyListMutation,
  useAddMerchantPaymentMutation,
  useUpdateMerchantStateMutation,
  useUpdateMerchantCountryMutation,
} = merchantApi;
