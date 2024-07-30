import { Post } from "@/app/components/postsContainer";
import { NextRequest, NextResponse } from "next/server";

const URL = 'https://jsonplaceholder.typicode.com/posts';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const GET = async (req: NextRequest) => {
    try {
        await delay(1000);
        const response = await fetch(URL, {
            cache: 'no-cache'
        });
        const data = await response.json();

        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
