import { ApiResponse } from "../types";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export async function apiRequest<T>(
    config: AxiosRequestConfig
): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
        const response = await axios.request<ApiResponse<T>>(config);
        return response;
    } catch (error) {
        console.error(error);
    }
}
