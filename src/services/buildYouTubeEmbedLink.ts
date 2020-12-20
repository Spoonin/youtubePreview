import { YoutubeLink } from "../models/YouTubeLink"

export const buildYouTubeEmbedLink = (youtubeData: YoutubeLink) =>
    `https://www.youtube.com/embed/${youtubeData.videoId}${
        (youtubeData.startAt && `?start=${youtubeData.startAt}`) || ""
    }`
