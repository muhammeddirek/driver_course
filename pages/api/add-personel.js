import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const filePath = path.join(process.cwd(), 'database', 'personelDatabase.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);

      const newPersonel = {
        PersonelID: new Date().getTime().toString(), // Unique ID
        ...req.body
      };

      data.push(newPersonel);

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      res.status(200).json({ message: 'Personel başarıyla eklendi!' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
