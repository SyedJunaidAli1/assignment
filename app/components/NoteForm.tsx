"use client";
import { useState } from "react";

interface Note {
  id: number;
  title: string;
  description?: string;
}

interface NoteFormProps {
  onAddNote: (note: Note) => void;
}

export default function NoteForm({ onAddNote }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    onAddNote({
      id: Date.now(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 space-y-4 rounded-xl border p-4 shadow-sm"
    >
      <div>
        <input
          className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 ${
            error
              ? "border-red-400 focus:ring-red-200"
              : "border-gray-300 focus:ring-blue-200"
          }`}
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>

      <textarea
        className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
      />

      <button
        type="submit"
        disabled={!title.trim()}
        className="w-full rounded-lg border px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50 "
      >
        Add Note
      </button>
    </form>
  );
}
