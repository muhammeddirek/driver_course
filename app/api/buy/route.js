import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Kurs from "@/models/Kurs";

export async function POST(req) {
  try {
    const { name, email, kursAdi } = await req.json();
    await connectMongoDB();
    await Kurs.create({
      name,
      email,
      kursAdi,
    });

    return NextResponse.json(
      { message: "Satın Alma Başarılı." },
      { status: 201 }
    );
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json({ message: "Error accured." }, { status: 500 });
  }
}
