export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Pouze POST metoda je povolena' });
  }

  try {
    const { address, items } = req.body;

    const firebaseUrl = process.env.FIREBASE_PROJECT_ID + '/orders.json';

    const response = await fetch(firebaseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        address,
        items,
        date: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error('Failed to write to Firebase');
    }

    const result = await response.json();
    res.status(200).json({ success: true, id: result.name }); // result.name = ID objednávky
  } catch (err) {
    console.error('Order error:', err);
    res.status(500).json({ error: 'Failed to submit order' });
  }
}
