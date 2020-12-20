import React, { FunctionComponent } from "react"
import { SearchResult } from "../models/SearchResult"

import "./styles/SearchResultList.css"

interface Props {
    searchResults: SearchResult[]
    onItemClick: (link: string) => void
}

export const SearchResultsList: FunctionComponent<Props> = ({
    searchResults,
    onItemClick,
}) => (
    <ul className="search-list">
        {searchResults.map(i => (
            <li
                className="search-list-item"
                key={i.link}
                onClick={() => onItemClick(i.link)}
            >
                {i.title && <div className="item-title">{i.title}</div>}
                {i.description && (
                    <div className="item-description">{i.description}</div>
                )}
                {!i.title && !i.description && i.link}
            </li>
        ))}
    </ul>
)
