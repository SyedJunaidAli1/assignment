interface Note {
  id: number;
  title: string;
  description?: string;
}

interface NoteItemProps {
  note: Note;
  onDelete: () => void;
}

export default function NoteItem({ note, onDelete }: NoteItemProps) {
  return (
    <div className="rounded-xl border  p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold">{note.title}</h3>
          {note.description && (
            <p className="mt-1 text-sm">{note.description}</p>
          )}
        </div>

        <button
          onClick={onDelete}
          className="rounded-md px-2 py-1 text-xs font-medium text-red-600 border hover:bg-muted/2 "
        >
          Delete
        </button>
      </div>
    </div>
  );
}
