import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    const userIndex = users.findIndex((u) => u.id === Number(id));

    if (userIndex === -1) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);

    return NextResponse.json(
      { success: true, data: deletedUser, message: "User deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
