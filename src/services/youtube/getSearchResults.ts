import { SearchRequest } from "../../models/SearchRequest"
import { SearchResult } from "../../models/SearchResult"
import { apiResultToSearchResult } from "./apiResultToSearchResult"
import { queryApi } from "./queryApi"
import { ApiError } from "../../models/ApiError"
import { ResponseData } from "./interfaces/ResponseData"

const isError = (result: ResponseData | ApiError): result is ApiError =>
    (result as ApiError).code !== undefined

export const getSearchResults = async (
    request: SearchRequest
): Promise<SearchResult[]> => {
    if (!request.apiKey) {
        return Promise.reject(
            new Error(
                "YouTube API require a Secret API Key. Look at https://developers.google.com/maps/documentation/javascript/get-api-key"
            )
        )
    }
    const result = await queryApi(request)
    if (isError(result)) {
        return Promise.reject(
            new Error(
                result.message ||
                    `API returned an error: ${
                        result.status || "unknown status"
                    } - code:${result.code || "unknown code"}`
            )
        )
    } else {
        return apiResultToSearchResult(result)
    }
}
