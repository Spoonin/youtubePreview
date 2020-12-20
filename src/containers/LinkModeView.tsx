import React, { FunctionComponent, useState } from "react"
import { SubmitInput } from "../components/SubmitInput"
import { parseYouTubeLink } from "../services/youtube/parseYouTubeLink"
import { buildYouTubeEmbedLink } from "../services/youtube/buildYouTubeEmbedLink"

interface Props {
    onPreviewLinkSubmit: (link: string) => void
}

export const LinkModeView: FunctionComponent<Props> = ({
    onPreviewLinkSubmit,
}) => {
    const [link, setLink] = useState<string>("")

    const [unsubmittedPreviewLink, setUnsubmittedPreviewLink] = useState<
        string | undefined
    >()

    const onLinkChange = (link: string) => {
        setLink(link)
        const parsed = parseYouTubeLink(link) // try parse link
        if (parsed) {
            const src = buildYouTubeEmbedLink(parsed)
            setUnsubmittedPreviewLink(src)
        } else {
            setUnsubmittedPreviewLink(undefined)
        }
    }

    const onLinkSubmit = () => {
        if (!unsubmittedPreviewLink) {
            throw new Error("Link was not validly parsed before submit")
        }
        onPreviewLinkSubmit(unsubmittedPreviewLink)
    }

    return (
        <>
            <label>Link</label>
            <SubmitInput
                value={link}
                onChange={onLinkChange}
                onSubmit={onLinkSubmit}
                disabled={unsubmittedPreviewLink === undefined}
            />
        </>
    )
}
