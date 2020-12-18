import { YoutubeLinkModel } from "../models/YouTubeLinkModel"

const YOUTUBE_COM_HOST = "youtube.com"
const YOUTU_BE_HOST = "youtu.be"
const ID_PARAM_NAME = "v"
const START_PARAM_NAME = "t"

export const parseYouTubeLink = (
    link: string
): YoutubeLinkModel | undefined => {
    const url = new URL(link)
    const host = url.host.replace("www.", "")
    let resourceId

    // define resourceId
    switch (host) {
        case YOUTUBE_COM_HOST: {
            resourceId = url.searchParams.get(ID_PARAM_NAME)
            break
        }
        case YOUTU_BE_HOST: {
            resourceId = url.pathname.split("/")[1]
            break
        }
        default:
            return undefined // unknown host
    }

    const startString = url.searchParams.get(START_PARAM_NAME)

    let startAt

    if (startString && !Number.isNaN(+startString)) {
        startAt = +startString
    }

    if (resourceId) {
        return { resourceId, startAt }
    }

    return undefined
}
