import { create } from "zustand";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data: Post[] = await res.json();
      set({ posts: data, loading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Failed to fetch posts",
        loading: false,
      });
    }
  },
}));
