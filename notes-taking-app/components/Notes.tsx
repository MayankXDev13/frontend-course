'use client';

import { useEffect, useState } from 'react';

interface Note {
  _id: string;
  title: string;
  content: string;
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getNotes() {
      try {
        const response = await fetch('/api/notes');

        if (!response.ok) {
          throw new Error('Failed to fetch notes');
        }

        const data = await response.json();
        setNotes(data.data);
      } catch (err) {
        setError('Something went wrong while loading notes');
      } finally {
        setLoading(false);
      }
    }

    getNotes();
  }, []);

  if (loading) {
    return (
      <div className="glass-effect p-8 rounded-2xl text-center animate-pulse">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-rose-500 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-rose-500 rounded-full animate-bounce"
            style={{ animationDelay: '0.1s' }}
          ></div>
          <div
            className="w-3 h-3 bg-rose-500 rounded-full animate-bounce"
            style={{ animationDelay: '0.2s' }}
          ></div>
        </div>
        <p className="text-gray-400 mt-4">Loading notes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-effect p-8 rounded-2xl text-center border-rose-500/50">
        <svg
          className="w-12 h-12 text-rose-500 mx-auto mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-rose-400 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="glass-effect p-8 rounded-2xl shadow-2xl animate-slide-up">
      <h2 className="text-3xl font-bold mb-6 text-center bg-linear-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">
        Your Notes
      </h2>

      {notes.length === 0 ? (
        <div className="text-center py-12">
          <svg
            className="w-16 h-16 text-rose-500/30 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-gray-500 text-lg">
            No notes yet. Create your first note above!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {notes.map((note, index) => (
            <div
              key={note._id}
              className="glass-effect-light p-6 rounded-xl border-l-4 border-rose-500
                                     hover:border-rose-400 hover:shadow-lg hover:shadow-rose-500/10
                                     transform hover:-translate-y-1 transition-all duration-300
                                     animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-rose-400 mb-2 flex items-center">
                <span className="w-2 h-2 bg-rose-500 rounded-full mr-3 animate-pulse"></span>
                {note.title}
              </h3>
              <p className="text-gray-300 leading-relaxed pl-5">
                {note.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
