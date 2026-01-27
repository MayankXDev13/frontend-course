'use client';

import { useState } from 'react';
import { useCreateNote } from '@/hooks/useCreateNote';
import toast from 'react-hot-toast';

const CreateNoteForm = () => {
  const { createNote } = useCreateNote();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [creating, setCreating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    try {
      setCreating(true);
      await createNote(title, content);
      toast.success('Note created');
      setTitle('');
      setContent('');
    } catch {
      toast.error('Failed to create note');
    } finally {
      setCreating(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">Create New Note</h2>

      <input
        className="w-full p-3 border rounded-md mb-3"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full p-3 border rounded-md mb-3"
        rows={4}
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        disabled={creating}
        className="bg-blue-500 text-white px-6 py-2 rounded-md disabled:opacity-50"
      >
        {creating ? 'Creating...' : 'Create Note'}
      </button>
    </form>
  );
};

export default CreateNoteForm;
