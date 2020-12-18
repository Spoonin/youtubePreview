import { YoutubeLinkModel } from "../models/YouTubeLinkModel"

export const buildYouTubeEmbedLink = (youtubeData: YoutubeLinkModel) =>
    `https://www.youtube.com/embed/${youtubeData.resourceId}${
        youtubeData.startAt && `?start=${youtubeData.startAt}`
    }`
