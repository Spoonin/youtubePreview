export interface SearchRequest {
    readonly phrase: string
    readonly limit?: number
    readonly apiKey?: string
}
