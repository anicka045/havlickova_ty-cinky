export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Pouze POST metoda je povolena' });
  }

  const { username, password } = req.body;
  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
}
