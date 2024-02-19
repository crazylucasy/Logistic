import { ListDataResponse } from "./global";
export interface LanguageDataType {
  id: number;
  languageFlag?: string;
  languageName: string;
  textDirection: string;
}

export interface LanguageSearchDataType {
  languageName?: string;
  textDirection?: string;
  status?: number;
}

export interface TranslateDataType {
  baseText: string;
  translatedText: string;
  textStatus: string;
}

export interface SaveTranslateDataType {
  id:number;
  languageId: number;
  baseTextId: number;
  translatedText: string;
  addStatus: number;
}

export interface SaveTranslateDataProps 
  extends ListDataResponse<SaveTranslateDataType> { }

export interface TranslateListResoponse 
  extends ListDataResponse<TranslateDataType[]> { }

export interface LanguageResponse
  extends ListDataResponse<LanguageDataType[]> { }
