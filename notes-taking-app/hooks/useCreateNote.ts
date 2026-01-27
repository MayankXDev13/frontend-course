'use client';

import api from '@/lib/axios';
import { useNotesStore } from '@/store/noteStore';

export const useCreateNote = () => {
  const addNote = useNotesStore((state) => state.addNote);

  const createNote = async (title: string, content: string) => {
    const res = await api.post('/notes', { title, content });
    addNote(res.data.data);
  };

  return { createNote };
};
