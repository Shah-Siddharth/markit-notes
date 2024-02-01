import { useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import { NoteData, RawNote, Tag } from "./types";
import "./App.css";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  const onCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return [...prevNotes, {
        ...data,
        id: uuidV4(),
        tagIds: tags.map((t) => t.id),
      }];
    });
  };

  return (
    <Container>
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
        <Route path="/new" element={<h1>New</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
