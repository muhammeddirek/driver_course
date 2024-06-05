import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/User';

export async function GET(request) {
  await connectMongoDB();

  try {
    const users = await User.find({});
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  }
}

export async function DELETE(request) {
  const { id } = await request.json();
  await connectMongoDB();

  try {
    await User.findByIdAndDelete(id);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  }
}
