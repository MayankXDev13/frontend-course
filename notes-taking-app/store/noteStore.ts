import { create } from 'zustand';

export interface Note {
  _id: string;
  title: string;
  content: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

interface NoteStore {
  notes: Note[];
  loading: boolean;
  setNotes: (notes: Note[]) => void;
  addNote: (note: Note) => void;
  removeNote: (id: string) => void;
  updateNote: (note: Note) => void;
  setLoading: (value: boolean) => void;
}

export const useNotesStore = create<NoteStore>((set) => ({
  notes: [],
  loading: false,

  setNotes: (notes) => set({ notes }),
  addNote: (note) => set((state) => ({ notes: [note, ...state.notes] })),
  updateNote: (updatedNote) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note._id === updatedNote._id ? updatedNote : note
      ),
    })),
  removeNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note._id !== id),
    })),
  setLoading: (value) => set({ loading: value }),
}));
