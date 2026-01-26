import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
    try {
        const headerList = await headers()
        const authHeader = headerList.get("Authorization")



        // Access request headers
        // const requestHeaders = new Headers(request.headers)
        // const authHeader = requestHeaders.get("Authorization")
        // return NextResponse.json({
        //     success: true,
        //     message: "Hello world form profile",
        // })

        console.log("Auth Header", authHeader);
        
    } catch (error) {
        
    }
}