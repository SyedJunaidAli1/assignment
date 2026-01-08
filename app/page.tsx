"use client";
import { useEffect, useState } from "react";
import Loader from "@/app/components/Loader";
import EmptyState from "@/app/components/EmptyState";
import NoteForm from "@/app/components/NoteForm";
import NoteList from "@/app/components/NoteList";

type Note = {
  id: number;
  title: string;
  description?: string;
};

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Simulating API Call
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const addNote = (note: Note) => {
    setNotes((prev) => [...prev, note]);
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="mx-auto mt-10 max-w-xl px-4">
      <h1 className="mb-6 text-2xl font-bold ">Notes App</h1>

      <NoteForm onAddNote={addNote} />

      {notes.length === 0 ? (
        <EmptyState />
      ) : (
        <NoteList notes={notes} onDeleteNote={deleteNote} />
      )}
    </main>
  );
}
