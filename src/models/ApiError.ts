export interface ApiError {
    readonly error: {
        readonly code?: number
        readonly message?: string
        readonly status?: string
    }
}
