import { NextRequest, NextResponse } from "next/server"
import { users } from "../route"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    try {
        const { id } = await params
        const user = users.find((user) => user.id === Number(id))

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not found",
            }, {
                status: 404,
            })
        }

        return NextResponse.json({
            success: true,
            data: user,
        }, {
            status: 200,
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Failed to fetch user",
        }, {
            status: 500,
        })
    }
}