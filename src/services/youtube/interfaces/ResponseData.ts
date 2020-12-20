export interface ResponseData {
    items: {
        id: { kind: string; videoId: string }
        snippet: { description: string; title: string }
    }[]
}
