'use client';
import React, { useState } from 'react';

export default function NotesClient() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;
    setLoading(true);

    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      const result = await response.json();
      console.log(result);

      setTitle('');
      setContent('');
      setLoading(false);
    } catch (error) {
      console.log('Error creating note', error);
      setLoading(false);
    }
  };

  return (
    <div className="animate-slide-up">
      <form
        onSubmit={handleSubmit}
        className="glass-effect p-8 rounded-2xl shadow-2xl hover:shadow-rose-500/10 transition-all duration-300"
      >
        <h2 className="text-2xl font-bold mb-6 text-rose-400">
          Create New Note
        </h2>
        <div className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength={100}
              className="w-full p-4 bg-black/50 border border-rose-500/30 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent
                       text-white placeholder-gray-500 transition-all duration-300
                       hover:border-rose-500/50"
            />
          </div>

          <div>
            <textarea
              placeholder="Note Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              maxLength={2000}
              rows={5}
              className="w-full p-4 bg-black/50 border border-rose-500/30 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent
                       text-white placeholder-gray-500 transition-all duration-300
                       hover:border-rose-500/50 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-4 rounded-xl font-semibold text-white
                     bg-linear-to-r from-rose-500 to-rose-600 
                     hover:from-rose-600 hover:to-rose-700
                     disabled:from-rose-800 disabled:to-rose-900 disabled:cursor-not-allowed
                     transform hover:scale-[1.02] active:scale-[0.98]
                     transition-all duration-200 shadow-lg shadow-rose-500/30
                     hover:shadow-rose-500/50"
          >
            {loading ? 'Creating...' : 'Create Note'}
          </button>
        </div>
      </form>
    </div>
  );
}
