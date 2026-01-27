'use client';

import { useEffect } from 'react';
import api from '@/lib/axios';
import { useNotesStore } from '@/store/noteStore';

export const useNotes = () => {
  const { notes, loading, setNotes, setLoading } = useNotesStore();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const res = await api.get('/notes');
        setNotes(res.data.data);
      } catch (err) {
        console.error('Failed to fetch notes', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [setNotes, setLoading]);

  return { notes, loading };
};
