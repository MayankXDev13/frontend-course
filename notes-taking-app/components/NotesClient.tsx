'use client';

import { useNotes } from '@/hooks/useNotes';
import CreateNoteForm from './CreateNoteForm';
import NotesList from './NotesList';

const NotesClient = () => {
  const { notes, loading } = useNotes();

  if (loading) {
    return <p className="text-center text-gray-500">Loading notes...</p>;
  }

  return (
    <div className="space-y-6">
      <CreateNoteForm />
      <NotesList notes={notes} />
    </div>
  );
};

export default NotesClient;
