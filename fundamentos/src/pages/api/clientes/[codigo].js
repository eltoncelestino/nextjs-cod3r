export default function handler(req, res) {
  const codigo = req.query.codigo

  res.status(200).json({
    id: codigo,
    nome: `Elton ${codigo}`,
    email: `elton${codigo}@emailemail.com`,
  })
}