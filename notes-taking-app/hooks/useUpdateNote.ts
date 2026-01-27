'use client';

import api from '@/lib/axios';
import { useNotesStore } from '@/store/noteStore';

export const useUpdateNote = () => {
  const updateNote = useNotesStore((state) => state.updateNote);

  const editNote = async (
    id: string,
    title: string,
    content: string,
    status: boolean
  ) => {
    const res = await api.put(`/notes/${id}`, {
      title,
      content,
      status,
    });

    updateNote(res.data.data);
  };

  return { editNote };
};
