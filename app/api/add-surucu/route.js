import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const body = await req.json();
    const filePath = path.join(process.cwd(), 'database', 'surucuDatabase.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    const newSurucu = {
      SurucuID: new Date().getTime().toString(), // Unique ID
      ...body
    };

    data.push(newSurucu);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return new Response(JSON.stringify({ message: 'Sürücü başarıyla eklendi!' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
