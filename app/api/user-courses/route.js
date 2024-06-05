import { connectMongoDB } from '@/lib/mongodb';
import Kurs from '@/models/Kurs';

export async function GET(request) {
  await connectMongoDB();

  const email = request.nextUrl.searchParams.get('email');
  if (!email) {
    return new Response(JSON.stringify({ success: false, message: 'Email is required' }), { status: 400 });
  }

  try {
    const courses = await Kurs.find({ email });
    return new Response(JSON.stringify(courses), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}
