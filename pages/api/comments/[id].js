import comments from '../comments.json'

export default (req, res) => {
    const comment = comments[req.query.id]
    switch (req.method) {
        case 'GET':
            res.status(200).json({ post: req.query.id, comment })
          break
        case 'POST':
            res.status(200).json({ post: req.query.id, comment })
          break
        default:
          res.status(405).end() //Method Not Allowed
          break
  }
}

