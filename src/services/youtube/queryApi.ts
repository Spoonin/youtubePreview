import { SearchRequest } from "../../models/SearchRequest"
import { ResponseData } from "./interfaces/ResponseData"
import { ApiError } from "../../models/ApiError"

export const queryApi = async (
    request: SearchRequest
): Promise<ResponseData | ApiError> =>
    fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${
            request?.limit || 10
        }&q=${encodeURIComponent(request.phrase)}&type=video&key=${
            request.apiKey
        }`
    ).then(response => response.json())
