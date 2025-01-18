import {Result} from "./movie";

export interface ApiResponse {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
