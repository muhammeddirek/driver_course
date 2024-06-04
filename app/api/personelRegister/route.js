import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(req) {
  try {
    const {
      name,
      surName,
      address,
      salary,
      job,
      phone,
      dersKod,
      kursID,
      email,
      password,
    } = await req.json();
    await connectMongoDB();
    await User.create({
      name,
      surName,
      address,
      salary,
      job,
      phone,
      dersKod,
      kursID,
      isAdmin: false,
      personelID: "",
      ehliyetID: "",
      email,
      password: password,
    });

    return NextResponse.json(
      { message: "Kullanıcı Kaydoldu." },
      { status: 201 }
    );
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json({ message: "Error accured." }, { status: 500 });
  }
}
