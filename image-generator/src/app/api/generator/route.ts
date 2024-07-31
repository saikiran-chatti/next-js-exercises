import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const API_KEY = process.env.API_KEY;
const openai = new OpenAI({ apiKey: API_KEY });

export const POST = async (req: NextRequest) => {
    try {
        const prompt = await req.json();
        console.log(prompt);

        const response = await openai.images.generate({
            model: "dall-e-2",
            prompt: prompt,
            n: 4,
            size: "1024x1024",
        });

        return NextResponse.json(response.data);

    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}