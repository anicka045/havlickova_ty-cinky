export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Pouze GET metoda je povolena' });
  }

  try {
    const firebaseUrl = process.env.FIREBASE_PROJECT_ID + '/products.json';
    console.log("FireBase URL new settings: " + firebaseUrl);

    const response = await fetch(firebaseUrl);
    if (!response.ok) {
      throw new Error('Firebase fetch failed');
    }

    const data = await response.json();
    if (!data) return res.status(200).json([]);

    const result = Object.entries(data).map(([key, value]) => ({
      id: key,
      ...value
    }));

    res.status(200).json(result);
  } catch (err) {
    console.error('Firebase error:', err);
    res.status(500).json({ error: 'Firebase connection failed' });
  }
}
