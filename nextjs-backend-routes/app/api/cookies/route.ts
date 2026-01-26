import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {
        //  Read cookies from the request
        const cookieStore = await cookies();
        const resultsPerPage = cookieStore.get()
   



        return NextResponse.json({
            message: "Cookie read successfully"
        })
    } catch (error) {
        
    }
}