import { Router } from 'express';

//register
router.post('/', userValidation, async (req, res) => {
    const { name, password } = req.body
    try {
      const validUserName = await db.collection('users').find({ name }).toArray()
      if (!!validUserName.length) return res.status(400).json({ error: "El usuario que intenta registrar ya existe" })
      const result = await db.collection('users').insertOne({
        name,
        password: hashPass
      })
      console.log("New user created: ", result.ops[0])
      res.send({ message: 'Usuario creado correctamente' })
    } catch (err) {
      console.log("ERROR", err)
    }
  })

const router = Router()