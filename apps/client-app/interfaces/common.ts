export interface DataMap<T> {
  [key: string]: T;
}

export interface Pagination {
  limit: number;
  page: number;
  total: number;
}

export interface PaginatedDataMap<T> extends Pagination {
  data: DataMap<T>;
}

export interface PaginatedData<T> extends Pagination {
  data: T[];
}

export interface DomainBox<T> {
  hasError: boolean;
  data: DataMap<T>;
}

export interface PaginatedDomainBox<T> {
  hasError: boolean;
  data: PaginatedData<T>;
}

export interface ResponseData<T> {
  code: string;
  isSuccessful: boolean;
  messages: string[];
  result: T;
}

export interface PaginableResponseData<T> extends ResponseData<T> {
  page: number;
  itemPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface RequestStatus<R, E> {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isFinish: boolean;
  error?: E;
  data?: R;
}

export const defaultRequestStatus = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  isFinish: false,
};
