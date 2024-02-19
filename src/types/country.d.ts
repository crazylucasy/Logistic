import { ListDataResponse } from "./global";
export interface CountryDataType {
  id: number;
  countryFlag?: string;
  countryName: string;
  language: string;
  currency: string;
}

export interface LanguageResponse {
  id: number;
  value: string;
  label: string;
}

export interface CountrySearchType {
  countryName?: string;
  language?: string;
  currency?: string;
  status?: number;
}

export interface AddCountryProp {
  countryName: string;
  language: string;
  currency: string;
  defaultCountry?: string;
}

export interface CountrycurrencyDataType {
  id: number;
  code: string;
  symbol: string;
}

export interface AddCountryDataProps extends AddCountryProp {
  id: number;
  defaultLanguageId: number;
  additionalLanguageId: number;
  countryCode?: string;
}

export interface CountryResponse extends ListDataResponse<CountryDataType[]> {}
export interface CountryCurrencyListResponse extends Array<CountrycurrencyDataType> {}