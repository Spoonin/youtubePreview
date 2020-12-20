import { VideoLink } from "../../models/VideoLink"

export const buildYouTubeEmbedLink = (youtubeData: VideoLink) =>
    `https://www.youtube.com/embed/${youtubeData.videoId}${
        (youtubeData.startAt && `?start=${youtubeData.startAt}`) || ""
    }`
