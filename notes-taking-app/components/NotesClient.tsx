'use client';

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  status: boolean;
}

const NotesClient = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [creating, setCreating] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editStatus, setEditStatus] = useState<boolean>(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const getNotes = async () => {
    try {
      const res = await fetch('/api/notes', { cache: 'no-store' });
      const result = await res.json();

      if (result.success) {
        setNotes(result.data);
      } else {
        toast.error('Failed to fetch notes');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, [loading]);

  const createNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setCreating(true);
    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      const result = await res.json();

      if (result.success) {
        setNotes((prev) => [result.data, ...prev]);
        toast.success('Note created successfully');
        setTitle('');
        setContent('');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setCreating(false);
    }
  };

  const deleteNote = async (id: string) => {
    try {
      const res = await fetch(`/api/notes/${id}`, { method: 'DELETE' });
      const result = await res.json();

      if (result.success) {
        setNotes((prev) => prev.filter((note) => note._id !== id));
        toast.success('Note deleted successfully');
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  const updateNote = async (id: string) => {
    if (!editTitle.trim() || !editContent.trim()) return;
    setLoading(true);

    setUpdatingId(id);
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editTitle,
          content: editContent,
          status: editStatus,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setNotes((prev) =>
          prev.map((note) => (note._id === id ? result.data : note))
        );
        toast.success('Note updated successfully');
        cancelEdit();
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setUpdatingId(null);
      setLoading(false);
    }
  };

  const startEdit = (note: Note) => {
    setEditingId(note._id);
    setEditTitle(note.title);
    setEditContent(note.content);
    setEditStatus(note.status);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
    setEditContent('');
    setEditStatus(true);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading notes...</p>;
  }

  return (
    <div className="space-y-6">
      <form onSubmit={createNote} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Create New Note</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-md"
            required
          />

          <textarea
            placeholder="Note Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full p-3 border rounded-md"
            required
          />

          <button
            type="submit"
            disabled={creating}
            className="bg-blue-500 text-white px-6 py-2 rounded-md disabled:opacity-50"
          >
            {creating ? 'Creating...' : 'Create Note'}
          </button>
        </div>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Notes ({notes.length})</h2>

        {notes.length === 0 ? (
          <p className="text-gray-500">No notes yet</p>
        ) : (
          notes.map((note) => (
            <div key={note._id} className="bg-white p-6 rounded-lg shadow-md">
              {editingId === note._id ? (
                <>
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full p-3 border rounded-md mb-3"
                  />

                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    rows={4}
                    className="w-full p-3 border rounded-md mb-3"
                  />

                  <select
                    value={String(editStatus)}
                    onChange={(e) => setEditStatus(e.target.value === 'true')}
                    className="w-full p-3 border rounded-md mb-3"
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>

                  <div className="flex gap-2">
                    <button
                      onClick={() => updateNote(note._id)}
                      disabled={updatingId === note._id}
                      className="bg-green-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
                    >
                      {updatingId === note._id ? 'Saving...' : 'Save'}
                    </button>

                    <button
                      onClick={cancelEdit}
                      className="bg-gray-500 text-white px-4 py-2 rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{note.title}</h3>
                    <div className="flex gap-2 text-sm">
                      <button
                        onClick={() => startEdit(note)}
                        className="text-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteNote(note._id)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-2">{note.content}</p>

                  <p
                    className={`text-sm font-medium ${
                      note.status ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    Status: {note.status ? 'Active' : 'Inactive'}
                  </p>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotesClient;
