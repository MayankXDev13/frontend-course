'use client';

import { useState } from 'react';
import { Note } from '@/store/noteStore';
import { useDeleteNote } from '@/hooks/useDeleteNote';
import { useUpdateNote } from '@/hooks/useUpdateNote';
import toast from 'react-hot-toast';

const NoteItem = ({ note }: { note: Note }) => {
  const { deleteNote } = useDeleteNote();
  const { editNote } = useUpdateNote();

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [status, setStatus] = useState(note.status);
  const [saving, setSaving] = useState(false);

  const handleUpdate = async () => {
    try {
      setSaving(true);
      await editNote(note._id, title, content, status);
      toast.success('Note updated');
      setEditing(false);
    } catch {
      toast.error('Update failed');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    await deleteNote(note._id);
    toast.success('Note deleted');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {editing ? (
        <>
          <input
            className="w-full p-3 border rounded-md mb-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full p-3 border rounded-md mb-3"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <select
            className="w-full p-3 border rounded-md mb-3"
            value={String(status)}
            onChange={(e) => setStatus(e.target.value === 'true')}
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              disabled={saving}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>

            <button
              onClick={() => setEditing(false)}
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
                onClick={() => setEditing(true)}
                className="text-blue-500"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
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
  );
};

export default NoteItem;
