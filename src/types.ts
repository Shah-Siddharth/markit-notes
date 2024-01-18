export type Note = {
    id: string
} & NoteData;

export type NoteData = {
    title: string,
    markdown: string,
    tags: Tag[]
};

export type RawNoteData = {
    title: string,
    markdown: string,
    tagIds: string[]
};

export type Tag = {
    id: string,
    title: string
};