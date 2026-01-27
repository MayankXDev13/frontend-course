import NotesClient from "@/components/NotesClient";
import connectToDb from "@/lib/db";
import noteModel from "@/models/note.model";

// Force dynamic rendering (important for DB data)
export const dynamic = "force-dynamic";

async function getNotes() {
  try {
    await connectToDb();

    const notes = await noteModel
      .find({})
      .sort({ createdAt: -1 })
      .lean();

    return notes.map((note) => ({
      ...note,
      _id: note._id.toString(),
      createdAt: note.createdAt?.toISOString(),
      updatedAt: note.updatedAt?.toISOString(),
    }));
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    return [];
  }
}

export default async function Home() {
  const notes = await getNotes();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Notes App</h1>
      <NotesClient initialNotes={notes} />
    </div>
  );
}
