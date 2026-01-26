import { NextRequest, NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params

        const userIndex = users.findIndex(u => u.id === Number(id))

        if (userIndex === -1) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
        }

        const body = await request.json()



        users[userIndex] = {
            ...users[userIndex],
            ...body,
            id: Number(id), 
        }

        return NextResponse.json({ success: true, data: users[userIndex], message: "User Updated!" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to update user" }, { status: 500 })
    }
}