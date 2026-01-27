import connectToDb from '@/lib/db';
import noteModel from '@/models/note.model';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await connectToDb();
    const { title, content } = await request.json();

    if (!title || !content) {
      return NextResponse.json(
        {
          success: false,
          message: 'All fields are required',
        },
        {
          status: 404,
        }
      );
    }

    const note = await noteModel.create({
      title,
      content,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Note created successfully',
        data: note,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create note',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDb();
    const notes = await noteModel.find().sort({ createdAt: -1 });

    if (!notes) {
      return NextResponse.json(
        {
          success: false,
          message: 'Notes not found',
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: 'Notes fetched successfully',
        data: notes,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch notes',
      },
      { status: 500 }
    );
  }
}




