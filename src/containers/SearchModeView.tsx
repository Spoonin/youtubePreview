import React, { FunctionComponent, useState, useEffect } from "react"
import { SubmitInput } from "../components/SubmitInput"
import { SearchResult } from "../models/SearchResult"
import { getSearchResults } from "../services/youtube/getSearchResults"
import { SearchResultsList } from "../components/SearchResultsList"

interface Props {
    onPreviewLinkSubmit: (link: string) => void
}

const SEARCH_LENGTH_THRESHOLD = 3
const RESULTS_LIST_LENGTH = 10
const { REACT_APP_GOOGLE_API_KEY } = process.env

export const SearchModeView: FunctionComponent<Props> = ({
    onPreviewLinkSubmit,
}) => {
    const [searchPhrase, setSearchPhrase] = useState<string>("")

    const [searchResults, setSearchResults] = useState<
        SearchResult[] | undefined
    >()
    const [searchRequested, setSearchRequested] = useState<boolean>(false)

    const isLoading = searchRequested && searchResults === undefined

    const onSearchPhraseChange = (value: string) => {
        setSearchPhrase(value)
        setSearchRequested(false)
        setSearchResults(undefined)
    }

    const onSubmit = () => {
        setSearchRequested(true)
    }

    useEffect(() => {
        if (searchRequested) {
            getSearchResults({
                phrase: searchPhrase,
                limit: RESULTS_LIST_LENGTH,
                apiKey: REACT_APP_GOOGLE_API_KEY,
            })
                .then(results => {
                    setSearchResults(results)
                    setSearchRequested(false)
                })
                .catch(console.error)
        }
    }, [searchRequested])

    return (
        <>
            <label className="container-title">Search</label>
            <SubmitInput
                value={searchPhrase}
                onChange={onSearchPhraseChange}
                onSubmit={onSubmit}
                disabled={
                    searchPhrase.length <= SEARCH_LENGTH_THRESHOLD || isLoading
                }
                submitButtonName={isLoading ? "Loading" : "Search"}
                placeholder="Search"
            />
            {searchResults && (
                <SearchResultsList
                    searchResults={searchResults}
                    onItemClick={onPreviewLinkSubmit}
                />
            )}
        </>
    )
}
