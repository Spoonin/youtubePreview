import React, { useState } from "react"
import "./App.css"
import { LinkModeView } from "./containers/LinkModeView"
import { SearchModeView } from "./containers/SearchModeView"

type Mode = "link" | "search"

const App = () => {
    const [mode, setMode] = useState<Mode>("link")

    const [frameSrc, setFrameSrc] = useState<string | undefined>()

    return (
        <div className="App">
            <label>Mode</label>
            <div
                onChange={e =>
                    setMode((e.target as HTMLSelectElement).value as Mode)
                }
            >
                <label>
                    Link
                    <input
                        type="radio"
                        value="link"
                        name="mode"
                        readOnly
                        defaultChecked
                    />
                </label>
                <label>
                    Search
                    <input type="radio" value="search" name="mode" />
                </label>
            </div>
            {mode === "link" && (
                <LinkModeView onPreviewLinkSubmit={setFrameSrc} />
            )}
            {mode === "search" && (
                <SearchModeView onPreviewLinkSubmit={setFrameSrc} />
            )}
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
