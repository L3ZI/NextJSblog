// src/app/api/comments/route.js

import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
import {getAuthSession} from "@/utils/auth";

//GET ALL COMMENTS
export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get("postSlug");

    try {
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && { postSlug: postSlug }),
            },
            include: { user: true },
        });
        return new NextResponse(JSON.stringify(comments), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};

//CREATE COMMENTS
export const POST = async (req) => {
    const session = await getAuthSession();

    if (!session){
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated!"}, {status: 401})
        );
    };

    try {
       const body = await req.json();
       const comment = await prisma.comment.create({
           data: {...body, userEmail: session.user.email},
       });
        return new NextResponse(JSON.stringify(comment), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};