import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(req) {
  try {
    const { name, mail, password } = await req.json();
    await connectMongoDB();
    await User.create({ name, mail, password: password });

    return NextResponse.json(
      { message: "Kullanıcı Kaydoldu." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error accured." }, { status: 500 });
  }
}