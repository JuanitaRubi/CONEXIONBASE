import prisma from '../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Lógica para buscar productos en la tabla "product"
      const brand = await prisma.brand.findMany();

      res.status(200).json({ brand });
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar productos' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}