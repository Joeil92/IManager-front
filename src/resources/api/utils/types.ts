export interface HttpSuccessResponse<T> {
    data: T;
    message: string;
}

export interface HttpErrorResponse {
    status: number;
    message: string;
}