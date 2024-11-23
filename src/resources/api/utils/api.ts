import { HttpSuccessResponse } from "./types";

const makeApiCall = async (input: URL | RequestInfo, init?: RequestInit) => {
    const response = await fetch(input, init);
    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data;
};

export const iManagerCall = <T>(pathname: string, init?: RequestInit): Promise<HttpSuccessResponse<T>> => {
    const API_URL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('ogaToken');

    return makeApiCall(`${API_URL}${pathname}`, {
        ...init,
        headers: {
            ...init?.headers,
            "authorization": token ? `Bearer ${token}` : "",
        },
    });
};