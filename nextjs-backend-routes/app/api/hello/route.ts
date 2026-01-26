import { NextRequest, NextResponse } from "next/server";

export const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        age: 25,
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        age: 30,
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        age: 28,
    },
];

export async function GET(request: NextRequest) {
    try {

        const sarchParams = request.nextUrl.searchParams
        const name = sarchParams.get("name") // this get you single value
        const age = sarchParams.get("age") // this get you single value

        let filteredUsers = users

        if (age) {
            filteredUsers = filteredUsers.filter((user) => user.age === Number(age))
        }

        if (name) {
            filteredUsers = filteredUsers.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()))
        }

        return NextResponse.json({
            success: true,
            data: filteredUsers,
            total: filteredUsers.length,
        }, {
            status: 200,
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Failed to fetch users",
        }, {
            status: 500,
        })

    }
}