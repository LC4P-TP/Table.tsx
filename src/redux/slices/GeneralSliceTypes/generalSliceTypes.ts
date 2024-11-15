export interface error {
  status: number;
  message: string;
}

interface Response<T> {
  array: T[];
  currentPage: number;
  pageCount: number;
}

export interface GeneralReponse<T> {
  isSuccess: boolean;
  response: Response<T>;
  error: string | null;
  statusCode: number;
}
