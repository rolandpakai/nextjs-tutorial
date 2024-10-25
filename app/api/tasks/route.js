import db from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const tasks = await db.task.findMany();

  return NextResponse.json({ data: tasks });
}

export const POST = async (req) => {
  const data = await req.json();
  const task = await db.task.create({
    data: { content: data.content },
  });

  return NextResponse.json({ data: task });
}