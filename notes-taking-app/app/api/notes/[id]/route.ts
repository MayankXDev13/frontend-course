
import connectToDb from "@/lib/db";
import noteModel from "@/models/note.model";

import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params } : {params: {id: string}}) {
  try {
    const { id } = await params;
    await connectToDb();
    const body = await request.json()

    const note = await noteModel.findByIdAndUpdate(
        id,
        {...body , updatedAt:new Date()},
        {new:true , runValidators:true}
    )    

        if (!note) {
      return NextResponse.json(
        { success: false, error: "Note not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({success:true ,data:note})

  } catch (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}

export async function DELETE(request: NextRequest, { params }: {params: {id: string}}) {
  try {
    const { id } = await params;
    await connectToDb();
    const note = await noteModel.findByIdAndDelete(id);

    if (!note) {
      return NextResponse.json(
        { success: false, error: "Note not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}