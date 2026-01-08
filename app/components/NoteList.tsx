import NoteItem from "@/app/components/NoteItem";

interface Note {
  id: number;
  title: string;
  description?: string;
}

interface NoteListProps {
  notes: Note[];
  onDeleteNote: (id: number) => void;
}

export default function NoteList({ notes, onDeleteNote }: NoteListProps) {
  return (
    <div className="space-y-3">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={() => onDeleteNote(note.id)}
        />
      ))}
    </div>
  );
}
