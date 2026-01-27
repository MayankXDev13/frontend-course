import NotesClient from "@/components/NotesClient";
import connectToDb from "@/lib/db";
import noteModel from "@/models/note.model";


async function getNotes() {
    await connectToDb();
  const notes = await noteModel.find({}).sort({createdAt:-1}).lean()

  return notes.map((note)=>({
    ...note,
    _id:note._id.toString()
  }))
}
export default async function Home() {

  const notes = await getNotes()

  console.log(notes)
  return (
   <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Notes App</h1>
      <NotesClient initialNotes={notes}/>
   </div>
  );
}