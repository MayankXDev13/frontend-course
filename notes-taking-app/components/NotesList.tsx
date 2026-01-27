'use client';

import { Note } from '@/store/noteStore';
import NoteItem from './NoteItem';

const NotesList = ({ notes }: { notes: Note[] }) => {
  if (notes.length === 0) {
    return <p className="text-gray-500">No notes yet</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Your Notes ({notes.length})
      </h2>

      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
