import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const filePath = path.join(process.cwd(), 'database', 'surucuDatabase.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);

      const newSurucu = {
        SurucuID: new Date().getTime().toString(), // Unique ID
        ...req.body
      };

      data.push(newSurucu);

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      res.status(200).json({ message: 'Sürücü başarıyla eklendi!' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
