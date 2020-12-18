import React, { useState } from "react"
import "./App.css"
import { SubmittableInput } from "./components/SubmittableInput"
import { buildYouTubeEmbedLink } from "./services/buildYouTubeEmbedLink"
import { parseYouTubeLink } from "./services/parseYouTubeLink"

const App = () => {
    const [link, setLink] = useState<string>("")
    const [frameSrcCandidate, setFrameSrcCandidate] = useState<
        string | undefined
    >()
    const [frameSrc, setFrameSrc] = useState<string | undefined>()

    const onLinkChange = (link: string) => {
        setLink(link)
        const parsed = parseYouTubeLink(link) // try parse link
        if (parsed) {
            const src = buildYouTubeEmbedLink(parsed)
            setFrameSrcCandidate(src)
        } else {
            setFrameSrcCandidate(undefined)
        }
    }

    const onSubmit = () => {
        if (!frameSrcCandidate) {
            throw new Error("frame Src is not ready")
        }
        setFrameSrc(frameSrcCandidate)
    }

    return (
        <div className="App">
            <SubmittableInput
                value={link}
                onChange={onLinkChange}
                onSubmit={onSubmit}
                disabled={frameSrcCandidate === undefined}
            />
            {frameSrc && (
                <iframe
                    width={560}
                    height={315}
                    src={frameSrc}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    )
}

export default App
