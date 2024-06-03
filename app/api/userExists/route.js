import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export default async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json(); // İsteği ayrıştır
    const user = await User.findOne({ email }).select("_id");

    console.log("User found: ", user);

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error in userExists API: ", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
