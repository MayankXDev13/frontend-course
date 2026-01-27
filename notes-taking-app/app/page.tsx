import Notes from '@/components/Notes';
import NotesClient from '@/components/NotesClient';

export default async function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent">
            Notes App
          </h1>
          <p className="text-gray-400 text-lg">
            Capture your thoughts in style
          </p>
        </div>

        <div className="space-y-8">
          <NotesClient />
          <Notes />
        </div>
      </div>
    </div>
  );
}
