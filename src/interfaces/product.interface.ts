export interface IProduct {
  id: number;
  status: string;
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
  status: string;
  total: number;
  currency: string;
  fundingMethod: string;
}

export interface ICreateProductResponse {
  message: string;
  error: boolean;
  code: number;
}

export interface IUpdateProductPayload {
  id: number;
  order: string;
  status: string;
  total: number;
  currency: string;
  fundingMethod: string;
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