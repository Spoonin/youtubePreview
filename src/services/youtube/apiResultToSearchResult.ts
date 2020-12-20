import { SearchResult } from "../../models/SearchResult"
import { ResponseData } from "./interfaces/ResponseData"
import { buildYouTubeEmbedLink } from "./buildYouTubeEmbedLink"

export const apiResultToSearchResult = (json: ResponseData): SearchResult[] =>
    json.items
        .filter(item => item.id.kind === "youtube#video")
        .map(item => ({
            link: buildYouTubeEmbedLink({ videoId: item.id.videoId }),
            title: item.snippet.title,
            description: item.snippet.description,
        }))
