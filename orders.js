export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Pouze GET metoda je povolena' });
  }

  // Jednoduchá autorizace přes token v hlavičce
  const auth = req.headers.authorization;
  if (!auth || auth !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return res.status(401).json({ error: 'Neautorizovaný přístup' });
  }

  try {
    const firebaseUrl = process.env.FIREBASE_PROJECT_ID + '/orders.json';

    const response = await fetch(firebaseUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch orders from Firebase');
    }

    const data = await response.json();

    const result = data
      ? Object.entries(data).map(([id, order]) => ({ id, ...order }))
      : [];

    res.status(200).json(result);
  } catch (err) {
    console.error('Fetch orders error:', err);
    res.status(500).json({ error: 'Failed to load orders' });
  }
}
