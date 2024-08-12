import payclip from '@api/payclip';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      payclip.auth('2960d457-5827-46a5-b439-777cc22c1969');
      const response = await payclip.realizarPago({
        amount: req.body.amount,
        currency: 'MXN',
        description: 'Compra en My Online Store',
        customer: { email: req.body.email, phone: req.body.phone },
      });
      res.status(200).json(response.data);
    } catch (err) {
      console.error('Error procesando el pago:', err);
      res.status(500).json({ error: 'Error procesando el pago' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
