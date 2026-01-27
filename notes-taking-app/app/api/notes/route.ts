import connectToDb from '@/lib/db';
import noteModel from '@/models/note.model'; 
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDb();
    const notes = await noteModel.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: notes });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDb();
    const body = await request.json();
    const note = await noteModel.create(body);

    return NextResponse.json({ success: true, data: note }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
