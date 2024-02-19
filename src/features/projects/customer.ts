import { ApiResponse } from "@/types/global";
import { rootApi } from "../api";
import { CustomerResponse } from "@/types/customer";
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

interface CustomerProps {
  customer: CustomerResponse | null;
}

const initialState: CustomerProps = {
  customer: null,
};

export const customerApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getCustomerData: build.mutation<
      ApiResponse<CustomerResponse>,
      {
        pageNumber: number;
        pageSize: number;
        merchantName?: string;
        customerName?: string;
        rating?: number;
        sword?: string;
      }
    >({
      query: (arg: {
        pageNumber: number;
        pageSize: number;
        merchantName?: string;
        customerName?: string;
        rating?: number;
        sword?: string;
      }) => ({
        url: `/admin/customer/list?pageNumber=${arg.pageNumber}&pageSize=${arg.pageSize
          }${arg.merchantName ? `&merchantName=${arg.merchantName}` : ""
          }${arg.customerName ? `&customerName=${arg.customerName}` : ""
          }${arg.rating ? `&rating=${arg.rating}` : ""
          }${arg.sword ? `&sword=${arg.sword}` : ""
          }`, // now we pass parameters in the url
        method: "GET",
      }),
      invalidatesTags: ["Customer"],
    }),
  }),
});

export const customer = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomerProps>) => {
    builder.addMatcher(
      customerApi.endpoints.getCustomerData.matchFulfilled,
      (state, action) => {
        state.customer = action?.payload?.data;
        // state.dashboard = null;
      }
    );
  },
}).reducer;

export const { useGetCustomerDataMutation } = customerApi;
