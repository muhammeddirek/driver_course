import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export default async function POST(req) {
  try {
    await connectMongoDB();
    const { mail } = req.json();
    const user = await User.findOne({ mail }).select("_id");
    console.log("user sdasd: ", user);

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
