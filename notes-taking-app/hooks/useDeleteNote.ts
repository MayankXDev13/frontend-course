'use client';

import api from '@/lib/axios';
import { useNotesStore } from '@/store/noteStore';

export const useDeleteNote = () => {
  const removeNote = useNotesStore((state) => state.removeNote);

  const deleteNote = async (id: string) => {
    await api.delete(`/notes/${id}`);
    removeNote(id);
  };

  return { deleteNote };
};
