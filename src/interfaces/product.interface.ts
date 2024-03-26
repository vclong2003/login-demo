export enum EProductStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Fulfilled = "FULFILLED",
  Received = "RECEIVED",
}

export interface IProduct {
  id: number;
  status: EProductStatus;
  currency: string;
  fundingMethod: string;
  total: number;
  order: string;
  client: string;
  invoice: string;
  createdBy: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductFilters {
  status: EProductStatus | "";
  client: string | "";
  from: Date | "";
  to: Date | "";
  invoice: string | "";
}

export interface IProductState {
  selectedProduct: IProduct | null;
  products: IProduct[];
}

export interface IGetAllProductsResponse {
  message: string;
  error: boolean;
  code: number;
  data: IProduct[];
}

export interface IGetProductByIdPayload {
  id: number;
}

export interface IGetProductByIdResponse {
  message: string;
  error: boolean;
  code: number;
  data: IProduct;
}

export interface ICreateProductPayload {
  order: string;
  client: string;
  status: EProductStatus;
  total: number;
  currency: string;
  fundingMethod: string;
  invoice: string;
}

export interface ICreateProductResponse {
  message: string;
  error: boolean;
  code: number;
}

export interface IUpdateProductPayload {
  id: number;
  order: string;
  client: string;
  status: EProductStatus;
  total: number;
  currency: string;
  fundingMethod: string;
  invoice: string;
}

export interface IUpdateProductResponse {
  message: string;
  error: boolean;
  code: number;
}

export interface IDeleteProductPayload {
  id: number;
}

export interface IDeleteProductResponse {
  message: string;
  error: boolean;
  code: number;
  data: number;
}
